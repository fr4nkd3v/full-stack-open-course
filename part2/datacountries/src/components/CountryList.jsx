const CountryList = ({ countries, onShowCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return (
      <>
        {countries.map(country => (
          <div key={country.name.official}>
            {country.name.common} <button onClick={() => onShowCountry(country.name.common)}>show</button>
          </div>
        ))}
      </>
    )
  } else {
    return null
  }
}

export default CountryList