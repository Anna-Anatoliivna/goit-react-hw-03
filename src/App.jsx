import { useState } from 'react'
// import { ContactForm } from './components/ContactForm/ContactForm'
import { SearchBox } from './components/SearchBox/SearchBox'
import { ContactList } from './components/ContactList/ContactList'
// import {Contact} from './components/Contact/Contact'

import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  )
  const [filterValue, setFilterValue] = useState('');
  


  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value)
  console.log(value);

  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()));


  return (
    <div>
      <>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox handleFilter={handleFilter} value={filterValue} onChange={handleFilter}/>
        <ContactList contacts={filteredContacts} />
      </>
    </div>
  );
}

export default App
