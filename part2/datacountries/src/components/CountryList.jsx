const CountryList = ({ countries, onShowCountry }) => {
  return (
    <>
      {countries.map(country => (
        <div key={country.name.official}>
          {country.name.common} <button onClick={() => onShowCountry(country.name.common)}>show</button>
        </div>
      ))}
    </>
  )
}

export default CountryList