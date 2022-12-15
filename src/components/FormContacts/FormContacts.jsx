import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { Formik, Field, ErrorMessage } from "formik";
import { FormStyle } from "./FormContacts.styled";
import * as yup from 'yup';

const shema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Name may contain only letters, apostrophe, dash and spaces')
        .required("name is required"),
    number: yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required("name is required"),
});

export default function FormContacts() {

    const contacts = useSelector(getContacts);

    const initialValues = {
        name: "",
        number: "",
    };

    const dispatch = useDispatch();

    const isDublicate = ({name, number}) => {
      const result = contacts.find(item => item.name === name
      || item.number === number);
    return result;
    };

    const handleSubmit = (values, { resetForm }) => {
        if (isDublicate(values)) {
            alert('this name or number is already added to contacts');
            resetForm();
            return;
        }
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={shema}
        >
            <FormStyle>
                <label>
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage component="div" name="name" />
                </label>
                <label>
                    Number
                    <Field type="tel" name="number" />
                    <ErrorMessage component="div" name="number" />
                </label>
                <button type="submit">Add contact</button>
            </FormStyle>
        </Formik>
    );
};
