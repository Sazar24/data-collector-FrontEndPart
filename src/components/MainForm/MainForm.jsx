import React from 'react';
import { InputForm } from '../InputForm/InputForm';
import DatePickerExampleControlled from '../DatePicker/DatePicker';
import DatePickForm from '../DatePicker/DatePicker';

export class MainForm extends React.Component {
    render() {
        return (
            <div className="mainForm">
                <InputForm title="First name: " dataValidationType="NAME" dataType="name" />
                <InputForm title="Surname: " dataValidationType="SURNAME" dataType="surname" />
                <InputForm title="E-mail: " dataValidationType="EMAIL" dataType="email" />
                <InputForm title="Town : " dataValidationType="NAME" dataType="town" />

                <DatePickForm title="Date: " dataType="date" />
            </div>
        )
    }
}