import { useEffect, useState } from 'react'
import countryService from './services/countries'
import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'

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
  const handlerClickShowCountry = (name) => {
    setFilterCountry(name)
  }

  const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))

  return (
    <>
      <div>
        find countries <input value={filterCountry} onChange={handlerChangeFilterCountry} />
      </div>
      <div>
        {
          matchingCountries.length > 10 ? 'Too many matches, specify another filter' :
          matchingCountries.length > 1 ? (
            <CountryList countries={matchingCountries} onShowCountry={handlerClickShowCountry} />
          ) :
          matchingCountries.length === 1 && (
            <CountryDetail country={matchingCountries[0]} />
          )
        }
      </div>
    </>
  )
}

export default App
