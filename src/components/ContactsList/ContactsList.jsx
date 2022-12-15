import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";

export default function ContactsList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const  getFilteredContacts = () => {

        if (!filter) {
        return contacts;
        };

        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
        });

        return filteredContacts;
    };

    const filterContacts = getFilteredContacts();

    const markup = filterContacts.map(({ id, name, number }) => (
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
