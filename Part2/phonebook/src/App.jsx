import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notifications from './components/Notifications'
import ErrorMessage from './components/ErrorMessage'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')

  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)




  useEffect(() => {
    personsService.getAll()
          .then(response => setPersons(response.data))
  }, [])





  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterString = (event) => {
    setFilterString(event.target.value)
  }
  const addNameElement = (event) => {
    event.preventDefault()
    
    const newPerson = { name: newName, number: newNumber }

    //test holds string if found(truthy), otherwise holds undefined(falsy)
    const test = persons.find(person => person.name===newName)
    
    //if .find works (already exists), don't add to phonebook
    if (test) {
      //BACKEND FUNCTIONALITY => REPLACE OLD NUMBER WITH NEW
      if (window.confirm(`${newName} is already added to phonebook. 
        Replace the old number with a new one?`)) {
          personsService.updateNumber(test.id, newPerson)
                        .then(response => {
                          setPersons(persons.map(p => p.id !== test.id
                            ? p : newPerson))
                        })
                        .catch(error => {
                          setErrorMessage(`Information of 
                          ${newPerson.name} has already been 
                          removed from server`)
                          setTimeout(() => {
                            setErrorMessage(null)
                          }, 5000)
                        })
      }
    }

    //add the name to list IMPLEMENT BACKEND FUNCTIONALITY
    else {
      personsService.addNumber(newPerson)
                  .then(response => {
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')

                    //set a notification upon successful addition
                    setNotification(`Added ${newPerson.name}`)
                    setTimeout(() => 
                                  {setNotification(null)}, 5000
                    )
                  })
                  
    }
  }
  const deleteNumber = (id) => {
    //console.log(`delete person with id ${id}`)

    if (window.confirm("Delete?")) {
      personsService.deleteNumber(id)
                .then(response => {
                  //const newPersonsList = persons.filter(p => p.id !== id)
                  //setPersons(newPersonsList)
                  setPersons(persons.filter(p => p.id !== id))
                })
    }
  }









  return (
    <div>
      <h2>Phonebook</h2>

      <Notifications message={notification} />
      <ErrorMessage message={errorMessage} />

      <Filter filterString={filterString} onChange={handleFilterString} />

      <h2>add a new</h2>

      <PersonForm 
          addNameElement={addNameElement}
          newName={newName}
          newNumber={newNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          />

      <h2>Numbers</h2>
        
      <Persons persons={persons} filterString={filterString} deleteNumber={(id) => deleteNumber(id)} />
    </div>
  )
}

export default App


