import { configureStore } from '@reduxjs/toolkit';
import { calendarSlice, uiSlice } from './';
import { authSlice } from '../store/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})