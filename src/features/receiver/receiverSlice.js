import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
};

export const receiverSlice = createSlice({
    name: 'receiver',
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

export const selectName = (state) => state.receiver.name;
export const selectStreet = (state) => state.receiver.street;
export const selectCity = (state) => state.receiver.city;
export const selectState = (state) => state.receiver.state;
export const selectZip = (state) => state.receiver.zip;
export const {
    updateName,
    updateStreet,
    updateCity,
    updateState,
    updateZip } = receiverSlice.actions;
export default receiverSlice.reducer;