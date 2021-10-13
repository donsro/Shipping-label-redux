import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import senderReducer from '../features/sender/senderSlice';
import receiverReducer from '../features/receiver/receiverSlice';
import weightReducer from '../features/weight/weightSlice';
import shippingReducer from '../features/shipping/shippingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sender: senderReducer,
    receiver: receiverReducer,
    weight: weightReducer,
    shipping: shippingReducer
  },
});
