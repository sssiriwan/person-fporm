import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PersonForm from './components/PersonForm';
import PersonTable from './components/PersonTable';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css'; 

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const App: React.FC = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <div className="app-container">
        <header className="header">
          <h1>Form & Table</h1>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('th')}>ภาษาไทย</button>
          </div>
        </header>
        <PersonForm />
        <PersonTable />
      </div>
    </I18nextProvider>
  </Provider>
);

export default App;
