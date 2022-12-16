import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { Container, Main } from "./App.styled";
import FormContacts from "../FormContacts/FormContacts";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Main>
      <Container>
        <FormContacts />
        <Filter />
        {contacts.length > 0 && <ContactsList />}
      </Container>
    </Main>
  );
};

