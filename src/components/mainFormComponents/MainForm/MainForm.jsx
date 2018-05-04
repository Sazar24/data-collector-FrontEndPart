import React from 'react';
import { InputForm } from '../InputForm/InputForm';
import DatePicker from '../DatePicker/DatePicker';

import "./mainForm.css";
import ApiButtonPostData from '../../ApiButtons/ApiButtonPostData';


const DataValidationType = {
    Name: Symbol("NAME"),
    Surname: Symbol("SURNAME"),
    Email: Symbol("EMAIL"),
}   // TODO: use symbols  (---> <Component validator={DataValidationType.Email} />  )

export class MainFormContainer extends React.Component {
    render() {
        return (
            <div className="mainForm">
                <InputForm title="First name: " validator="NAME" reducerDataType="name" />
                <InputForm title="Surname: " validator="SURNAME" reducerDataType="surname" />
                <InputForm title="E-mail: " validator="EMAIL" reducerDataType="email" />
                <InputForm title="Town : " validator="NAME" reducerDataType="town" />
                <DatePicker title="Date: " reducerDataType="date" />
                <ApiButtonPostData />
            </div>
        )
    }
}
