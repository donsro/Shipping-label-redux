import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shippingOptions: 1
};

export const shippingSlice = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        updateShippingOptions: (state, action) => {
            state.shippingOptions = action.payload;
        }
    }
});

export const selectShippingOptions = (state) => state.shipping.shippingOptions;
export const { updateShippingOptions } = shippingSlice.actions;
export default shippingSlice.reducer;