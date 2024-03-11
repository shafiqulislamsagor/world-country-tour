import { useState } from 'react';
import './country.css'
const Countrie = ({country}) => {
    const {name,flags,idd} = country;
    const {common,official} = name||{common:'not avilable',official:'not avilable'}
    // console.log(name);
    const [click , setClick] = useState(false)
    const handleClick = () =>{
        setClick(!click)
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {common}</h2>
            <h5>Native: {official}</h5>
            <h5>Native: {official}</h5>
            <h5>Native: {official}</h5>
            <p>Country No: {idd.root}</p>
            <div>
                <button onClick={handleClick}>{!click ? 'visit':'visited'}</button>
            </div>
        </div>
    );
};

export default Countrie;