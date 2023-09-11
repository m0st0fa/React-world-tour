import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

 
 const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlag, setVisitedFlag] = useState([]);
    



    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
     
    const handleVisitedCountry = country =>{
        console.log('add this to your visited country')
       const newVisitedCountry = [...visitedCountries, country]
       setVisitedCountries(newVisitedCountry)
    }

    const handleVistedFlags = (flags) =>{
        const newVisitedFlag = [...visitedFlag, flags]
        setVisitedFlag(newVisitedFlag)
    }


    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* visited country  */}
            <div>
            <h5>Visited Countries:{visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3} >{country.name.common} </li>)
                }

            </ul>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img> )
                }
            </div>

            </div>
            {/* display countried */}
           <div className="country-container ">
            {
                countries.map(country => <Country
                     key={country.cca3}
                     handleVisitedCountry ={handleVisitedCountry} 
                     handleVistedFlags ={handleVistedFlags}
                     Country={country}></Country> )
            }

           </div>
            
        </div>
    );
 };
 
 export default Countries;