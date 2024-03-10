import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";
import './Extra.css'


const Countries = () =>{
    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        const api = async() =>{
            const url = 'https://restcountries.com/v3.1/all';
        const facthData = await fetch(url);
        const dataJSON =await facthData.json();
        setCountries(dataJSON)
        }
        api();
    },[])
    // console.log(countries);
    return(
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-row">
            {
                countries.map(country => <Countrie key={country.cca2} country={country}></Countrie>)
            }
            </div>
        </div>
    )
}

export default Countries;