import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handlerChangeName = (event) => setNewName(event.target.value)

  const handlerChangeNumber = (event) => setNewNumber(event.target.value)

  const handlerSubmitForm = (event) => {
    event.preventDefault()
    if (persons.some(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      const newPersonList = persons.concat(newPerson)
      setPersons(newPersonList)
    }
    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlerSubmitForm}>
        <div>
          name: <input value={newName} onChange={handlerChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlerChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => <p key={name}>{name} {number}</p>)}
    </div>
  )
}

export default App