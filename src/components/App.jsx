import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermine Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleContacts = ({ id, name, number }) => {
    if (contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts, { id, name, number }]);
    }
  };

  const renderContactsList = () => {
    return filter === ''
      ? contacts
      : contacts.filter(
          contact =>
            contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleContacts} />
      </Section>
      <Section title="Contacts">
        <Filter handleFilter={handleFilter} />
        <ContactList
          contactsList={renderContactsList()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount = () => {
//     const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
//     // console.log(localStorageContacts);

//     if (localStorageContacts !== null) {
//       return this.setState({ contacts: localStorageContacts });
//     }

//     this.setState({ contacts: initialContacts });
//   };

//   componentDidUpdate = (_prevProps, prevState) => {
//     const prevContacts = prevState.contacts;
//     const nextContacts = this.state.contacts;

//     if (prevContacts !== nextContacts) {
//       return localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   };

//   handleContacts = ({ id, name, number }) => {
//     if (this.state.contacts.some(e => e.name === name)) {
//       alert(`${name} is already in contacts`);
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, { id, name, number }],
//       }));
//     }
//   };

//   renderContactsList = () => {
//     const query = this.state.filter;
//     return this.state.filter === ''
//       ? this.state.contacts
//       : this.state.contacts.filter(
//           contact =>
//             contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//         );
//   };

//   handleFilter = evt => {
//     evt.preventDefault();
//     this.setState({ filter: evt.target.value });
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   render() {
//     return (
//       <>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.handleContacts} />
//         </Section>
//         <Section title="Contacts">
//           <Filter handleFilter={this.handleFilter} />
//           <ContactList
//             contactsList={this.renderContactsList()}
//             deleteContact={this.deleteContact}
//           />
//         </Section>
//       </>
//     );
//   }
// }
