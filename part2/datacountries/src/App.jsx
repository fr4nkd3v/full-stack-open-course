import { useEffect, useState } from 'react'
import countryService from './services/countries'
import weatherService from './services/weather'
import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'
import CountryWeather from './components/CountryWeather'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')
  const [countrySelected, setCountrySelected] = useState(null)
  const [weatherCountrySelected, setWeatherCountrySelected] = useState(null)

  const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))

  useEffect(() => {
    countryService
      .getAll()
      .then(result => setCountries(result))
  }, [])

  useEffect(() => {
    if (!filterCountry) {
      setCountrySelected(null)
      setWeatherCountrySelected(null)
      return
    }

    const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))
    if (matchingCountries.length === 1) {
      setCountrySelected(matchingCountries[0])
      setWeatherCountrySelected(null)
      weatherService
        .get(matchingCountries[0].capital)
        .then(result => setWeatherCountrySelected(result))
    } else {
      setCountrySelected(null)
    }
  }, [filterCountry, countries])

  const handlerChangeFilterCountry = (event) => {
    setFilterCountry(event.target.value)
  }
  const handlerClickShowCountry = (name) => {
    setFilterCountry(name)
  }

  if (countries.length <= 0) {
    return <>Wait a few moments for the application to load.</>
  } else {
    return (
      <>
        <div>
          find countries <input value={filterCountry} onChange={handlerChangeFilterCountry} />
        </div>
        <div>
          <CountryList
            countries={matchingCountries}
            onShowCountry={handlerClickShowCountry}
          />
          <CountryDetail country={countrySelected} />
          <CountryWeather weither={countrySelected && weatherCountrySelected} />
        </div>
      </>
    )
  }
}

export default App
