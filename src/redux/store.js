import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactSlice.name]: contactSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});

/*======== PERSIST =======*/
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { contactsReducer } from 'redux/contactSlice';
// import { filterReducer } from 'redux/filterSlice';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedRootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
