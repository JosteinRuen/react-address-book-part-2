import { Link } from "react-router-dom"

function ContactListItem(props){
    const{person} = props

    return(<li>
        <h4>
            {person.firstName} <Link to={`/`}>View</Link>
        </h4>
    </li>)
}

export default ContactListItem