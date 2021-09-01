import React from 'react';

import { AppHeader, NewUserForm, UsersList } from './components';
import './App.scss';

const App = () => {
    return(
        <div className="app">
            <AppHeader />
            <div className="inner-container">
                <NewUserForm />
                <UsersList />
            </div>
        </div>     
    );
}

export default App;