import { useEffect, useState } from 'react'
import axios from 'axios';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/persons')
      .then((response) => setPersons(response.data))
  }, [])

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
      <Filter filterName={filterName} onChangeFilter={handlerChangeFilterName} />
      <h3>Add a new Number</h3>
      <PersonForm
        onSubmitForm={handlerSubmitForm}
        newName={newName}
        onChangeName={handlerChangeName}
        newNumber={newNumber}
        onChangeNumber={handlerChangeNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App