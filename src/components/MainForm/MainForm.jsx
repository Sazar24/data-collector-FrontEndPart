import React from 'react';
import { InputForm } from '../InputForm/InputForm';
import DatePickerExampleControlled from '../DatePicker/DatePicker';
import DatePickForm from '../DatePicker/DatePicker';

export class MainForm extends React.Component {
    render() {
        return (
            <div className="mainForm">
                <InputForm dataType="NAME" title="First name: " />
                <InputForm dataType="SURNAME" title="Surname: " />
                <InputForm dataType="EMAIL" title="E-mail: " />
                <InputForm dataType="DATE" title="Date : " />
                <InputForm dataType="NAME" title="Town : " />
                <DatePickForm title="Date: "/>
            </div>
        )
    }
}