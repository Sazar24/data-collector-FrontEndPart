import React from 'react';
import { MainFormContainer } from '../mainFormComponents/MainForm/MainForm';
import UsersContainer from '../dataPreviewComponents/UsersContainer/UsersContainer';
import "./app.css"



export class App extends React.Component {
    render() {
        return (
            <div className="app">
                    <MainFormContainer />
                    <UsersContainer />
            </div>
        )
    }
}

