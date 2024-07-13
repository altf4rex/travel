'use client'
import { store } from '../store/configureStore'
import { Provider } from 'react-redux'

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  );
}
