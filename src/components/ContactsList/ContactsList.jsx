import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";

export default function ContactsList() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const markup = contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>
                {name}: {number}
                <button type="button" onClick={() => dispatch(deleteContact(id))}>
                    Delete
                </button>
            </p>
        </li>
    ));
    return (
        <ul>
            {markup}
        </ul>
    );
};
