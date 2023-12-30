import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ textNotification, setTextNotification ] = useState(null)
  const [ typeNotification, setTypeNotification ] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then(allPersons => setPersons(allPersons))
  }, [])

  const handlerChangeName = (event) => setNewName(event.target.value)

  const handlerChangeNumber = (event) => setNewNumber(event.target.value)

  const handlerChangeFilterName = (event) => setFilterName(event.target.value)

  const handlerSubmitForm = (event) => {
    event.preventDefault()
    let personFound = persons.find(({ name }) => name === newName)
    if (personFound) {
      const confirmed = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (confirmed) {
        updatePhone(personFound, newNumber)
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(newPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          showNotification(`Added ${newName}`, 'success')
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const updatePhone = (personObj, number) => {
    const modifiedPersonObj = {
      ...personObj, number
    }

    personsService
      .update(personObj.id, modifiedPersonObj)
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id === personObj.id ? updatedPerson : person))
        showNotification(`Phone updated ${newName}`, 'success')
      })
      .catch(error => {
        showNotification(`Information of ${newName} has already been removed from server`, 'error')
        setPersons(persons.filter(person => person.id !== personObj.id))
      })
  }

  const handlerDeletePerson = (name, id) => {
    const confirmed = window.confirm(`Delete ${name} ?`)
    if (confirmed) {
      personsService
        .remove(id)
        .then(() => setPersons(persons.filter(p => p.id !== id)))
    }
  }

  const showNotification = (text, type) => {
    setTypeNotification(type)
    setTextNotification(text)
    setTimeout(() => setTextNotification(null), 5000)
  }

  const filteredPersons = filterName ? persons.filter(({ name }) => name.toLowerCase().includes(filterName)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification text={textNotification} type={typeNotification} />
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
      <Persons persons={filteredPersons} onDeletePerson={handlerDeletePerson} />
    </div>
  )
}

export default App