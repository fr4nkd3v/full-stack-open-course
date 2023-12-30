const Notification = ({ type, text }) => {
  if (!text) return null

  return (
    <div className={`notification ${type}`}>
      {text}
    </div>
  )
}

export default Notification