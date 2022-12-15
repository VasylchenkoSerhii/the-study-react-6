import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { Container, Header, Main } from "./App.styled";
import FormContacts from "../FormContacts/FormContacts";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Header>
        <Container>
          <Filter />
        </Container>
      </Header>
      <Main>
        <Container>
          <FormContacts />
          {contacts.length > 0 && <ContactsList />}
        </Container>
      </Main>
    </>
  );
};

