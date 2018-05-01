import React from 'react';
import { Inputter } from './../_example/Inputter/Inputter';
import "./app.css"
import Preview from './../_example/Preview/Preview';
import { MainForm } from '../MainForm/MainForm';
import UsersContainer from '../dataPreview/UsersContainer/UsersContainer';


export class App extends React.Component {
    render() {
        return (
            <div className="app">
                    <MainForm />
                    <UsersContainer />
            </div>
        )
    }
}

