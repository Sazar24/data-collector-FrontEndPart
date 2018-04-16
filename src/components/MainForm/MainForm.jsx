import React from 'react';
import { InputForm } from '../InputForm/InputForm';


export class MainForm extends React.Component {
    render() {
        return (
            <div className="mainForm">
                <InputForm dataType="NAME" title="First name: " />
                <InputForm dataType="SURNAME" title="Surname: " />
            </div>
        )
    }
}