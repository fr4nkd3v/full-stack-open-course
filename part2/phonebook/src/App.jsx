import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const handlerChangeName = (event) => setNewName(event.target.value)

  const handlerChangeNumber = (event) => setNewNumber(event.target.value)

  const handlerChangeFilterName = (event) => setFilterName(event.target.value)

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

  const filteredPersons = filterName ? persons.filter(({ name }) => name.toLowerCase().includes(filterName)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filterName} onChange={handlerChangeFilterName} />
      </div>
      <h2>Add a new Number</h2>
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
      {filteredPersons.map(({ name, number }) => <p key={name}>{name} {number}</p>)}
    </div>
  )
}

export default App