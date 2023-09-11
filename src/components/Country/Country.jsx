 import { useState } from 'react';
import './Country.css'
 const Country = ({Country, handleVisitedCountry,handleVistedFlags}) => {
    const {name, flags, population, area, cca3, } = Country;
    
    const [Visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!Visited)
    }

    
    


    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3 style={{color: Visited? 'purple' : 'white'}}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area} km</p>
            <p><small>{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(Country)}>Mark Visited</button>
            <button onClick={() => handleVistedFlags(Country.flags.png)}>Add Visited flags</button>
            <br />
            <button onClick={handleVisited}>{Visited? 'Visited': 'Going'}
            </button>
            {Visited?'I visited this country ': 'I want to visit'} 


            
        </div>
    );
 };
 
 export default Country;