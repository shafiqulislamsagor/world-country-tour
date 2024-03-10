import { useEffect } from "react";
import { useState } from "react"

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
    return(
        <div>
            <h3>Countries: {countries.length}</h3>
        </div>
    )
}

export default Countries;