import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handlerChangeName = (event) => {
    setNewName(event.target.value)
  }
  const handlerSubmitForm = (event) => {
    event.preventDefault()
    if (persons.some(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPersons = persons.concat({ name: newName})
      setPersons(newPersons)
    }
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlerSubmitForm}>
        <div>
          name: <input value={newName} onChange={handlerChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => <p key={name}>{name}</p>)}
    </div>
  )
}

export default App