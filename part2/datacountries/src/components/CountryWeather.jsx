const CountryWeather = ({ weither }) => {
  if (!weither) return null
  return (
    <>
      <h2>Weather in {weither.city}</h2>
      <p>temperature {weither.temp} Celcius</p>
      <img src={weither.iconPath} />
      <p>wind {weither.windSpeed} m/s</p>
    </>
  )
}
export default CountryWeather