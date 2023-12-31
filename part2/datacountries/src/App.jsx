import { useEffect, useState } from 'react'
import countryService from './services/countries'
import CountryDetail from './components/CountryDetail'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(result => setCountries(result))
  }, [])

  const handlerChangeFilterCountry = (event) => {
    setFilterCountry(event.target.value)
  }

  const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry))

  return (
    <>
      <div>
        find countries <input value={filterCountry} onChange={handlerChangeFilterCountry} />
      </div>
      <div>
        {
          matchingCountries.length > 10 ? 'Too many matches, specify another filter' : 
          matchingCountries.length > 1 ? matchingCountries.map(country => (
            <p key={country.name.official}>{country.name.common}</p>
          )) :
          matchingCountries.length === 1 && (
            <CountryDetail country={matchingCountries[0]} />
          )
        }
      </div>
    </>
  )
}

export default App
