import './App.css';
import {useState, useEffect} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ContactPage from './components';
import ContactDetail from './components/ContactDetail';
import AddContact from './components/AddContact';
import { useContext, createContext } from 'react';



function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/contact`)
            if(!response.ok){
                throw Error("Couldn't fetch art data")
            }
            const data = await response.json()
            setContacts(data)
          } catch (error) {
            console.error("Error fetching contacts:", error)
          }
        }
    
        fetchContacts()
      }, [])
      console.log(contacts)

    const addContact = (contact) => {
        const newContact = {...contact, id: contacts.length + 1};
        setContacts([...contacts, newContact]);
      };
    return (
        <><header>
            <h1>My Address book</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<ContactPage contacts={contacts} setContacts={setContacts} />} />
            <Route path="/view/:id" element={<ContactDetail contacts={contacts} />} />
            <Route path= '/add' element={<AddContact addContact={addContact} />} />
        </Routes></>
    );
}

export default App;
