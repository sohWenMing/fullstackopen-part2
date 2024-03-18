import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import services from './services/services'
import MainInfo from './components/MainInfo';
import Languages from './components/Languages'
import Flag from './components/Flag'


const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
console.log("apiKey: ", apiKey);



function App() {
  const [country, setCountry] = useState("");
  const [isFound, setIsFound] = useState(true);
  const [information, setInformation] = useState({});

  function updateCountry(event) {
    const country = event.target.value;
    setCountry(prev => country);
  } 

  async function getAll() {
    console.log("button clicked")
    const response = await(services.getAll());
    console.log(response);

    
  }
  useEffect(() => {
    if(country === "") {
      setIsFound(prev => true);
      return
    }

    if(country !== "") {
      console.log("after render: ", country)
      services.searchCountry(country)
      .then((res) => {
        setIsFound(prev => true)
        setInformation(prev => res.data)
      })
      .catch((error) => {
        setIsFound(prev => false)
        setInformation({})
      })
    }
  }, [country])

  useEffect(() => {
    console.log("information: ", information);
    console.log("flag", information.flags)

  }, [information])


  return (
    <>
      <SearchInput updateCountry={updateCountry} />
      {information.name && information.capital && information.area &&
      <MainInfo name={information.name.common} capital={information.capital} area={information.area}/>
      }
      {information.languages && 
      <Languages languages={information.languages} />
      }
      {information.flags &&
      <Flag url={information.flags.png} alt={information.flags.alt}/> 
      } 
      
      
      {!isFound && 
      <div>
        Country could not be found, please search again
      </div>
      }
      {console.log("is name found: ", information.name)}
     

    </>
  )
 
}

export default App
