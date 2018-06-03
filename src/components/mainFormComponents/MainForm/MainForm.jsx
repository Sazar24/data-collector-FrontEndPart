import React from 'react';
import { connect } from 'react-redux';
import DatePicker from '../DatePicker/DatePicker';

import "./mainForm.css";
import ApiButtonPostData from '../../ApiButtons/ApiButtonPostData';
import InputForm from '../InputForm/InputForm';


export default
    class MainFormContainer extends React.Component {
    render() {
        return (
            <div className="mainForm">
                <InputForm title="First name:" validator="NAME" reducerDataType="name" />
                <InputForm title="Surname:" validator="SURNAME" reducerDataType="surname" />
                <InputForm title="E-mail:" validator="EMAIL" reducerDataType="email" />
                <InputForm title="Town:" validator="NAME" reducerDataType="town" />
                <DatePicker title="Date:" reducerDataType="date" /> 
                <ApiButtonPostData />
            </div>
        )
    }
}

