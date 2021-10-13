import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
};

export const senderSlice = createSlice({
    name: 'sender',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateStreet: (state, action) => {
            state.street = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateState: (state, action) => {
            state.state = action.payload;
        },
        updateZip: (state, action) => {
            state.zip = action.payload;
        }
    }
});

export const selectName = (state) => state.sender.name;
export const selectStreet = (state) => state.sender.street;
export const selectCity = (state) => state.sender.city;
export const selectState = (state) => state.sender.state;
export const selectZip = (state) => state.sender.zip;
export const {
    updateName,
    updateStreet,
    updateCity,
    updateState,
    updateZip } = senderSlice.actions;
export default senderSlice.reducer;