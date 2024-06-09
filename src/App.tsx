import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PersonForm from './components/PersonForm';
import PersonTable from './components/PersonTable';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App: React.FC = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <div style={{ padding: '20px' }}>
        <PersonForm />
        <PersonTable />
      </div>
    </I18nextProvider>
  </Provider>
);

export default App;