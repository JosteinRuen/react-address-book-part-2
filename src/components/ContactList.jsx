import { useContext } from 'react'
import ContactListItem from './ContactListItem'
import { ContactsContext } from '../App';


function ContactList() {
    const { contacts } = useContext(ContactsContext);

    return(
        <ul>
      {contacts.map((person, index) => (
        <ContactListItem key={index} person={person} />
      ))}
    </ul>

    )
}

export default ContactList