// import React, { PropsWithChildren } from 'react';
// import { render, RenderOptions } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import destinationReducer from '../features/placesSlice'; // Ваш редуктор
// import type { RootState } from '../store/configureStore';

// const rootReducer = combineReducers({
//   destination: destinationReducer,
// });

// function setupStore(preloadedState?: Partial<RootState>) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
// }

// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: Partial<RootState>;
//   store?: ReturnType<typeof setupStore>;
// }

// function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     store = setupStore(preloadedState),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

// export { renderWithProviders };
