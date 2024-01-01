const CountryDetail = ({ country }) => {
  if (!country) return null
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <div>
        <p><b>languages:</b></p>
        <ul>
          {
            Object.entries(country.languages).map(
              ([key, language]) => <li key={key}>{language}</li>
            )
          }
        </ul>
      </div>
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          style={{
            height: '10rem',
            border: '1px solid #999'
          }}
        />
      </div>
    </>
  )
}

export default CountryDetail