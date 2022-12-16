import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { Formik } from "formik";
import { FormStyle, SectionForm, InputForm, Label, Error } from "./FormContacts.styled";
import * as yup from 'yup';

const shema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Invalid name')
        .required("Name is required"),
    number: yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Invalid number')
        .required("Number is required"),
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
        <SectionForm>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={shema}
            >
                <FormStyle>
                    <Label>
                        Name
                        <InputForm type="text" name="name" />
                        <Error component="div" name="name" />
                    </Label>
                    <Label>
                        Number
                        <InputForm type="tel" name="number" />
                        <Error component="div" name="number" />
                    </Label>
                    <button type="submit">Add contact</button>
                </FormStyle>
            </Formik>
        </SectionForm>
    );
};
