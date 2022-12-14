import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import FormContacts from "./FormContacts/FormContacts";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <FormContacts />
      <Filter />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
};

