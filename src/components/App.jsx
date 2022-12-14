import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import FormContacts from "./FormContacts/FormContacts";
import ContactsList from "./ContactsList/ContactsList";

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <FormContacts />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
};

