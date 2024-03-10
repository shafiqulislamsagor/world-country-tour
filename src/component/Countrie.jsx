import './country.css'
const Countrie = ({country}) => {
    const {name,flags,idd} = country;
    const {common,official} = name||{common:'not avilable',official:'not avilable'}
    console.log(name);
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Name: {common}</h1>
            <h5>Native: {official}</h5>
            <p>Country No: {idd.root}</p>
        </div>
    );
};

export default Countrie;