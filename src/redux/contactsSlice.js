import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        ...contact,
                        id: nanoid(),
                    },
                }
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact, isDublicate } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;