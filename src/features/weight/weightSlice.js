import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weight: ''
};

export const weightSlice = createSlice({
    name: 'weight',
    initialState,
    reducers: {
        updateWeight: (state, action) => {
            state.weight = action.payload;
        }
    }
});

export const selectWeight = (state) => state.weight.weight;
export const { updateWeight } = weightSlice.actions;
export default weightSlice.reducer;