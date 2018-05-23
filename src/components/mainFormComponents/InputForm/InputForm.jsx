import React from 'react';
import { connect } from 'react-redux';
import "./inputForm.css";
import Validator from '../../../services/validator/Validator';
import ReduxActions from '../../../actions/reduxActions';
import { saveFormDataByType, saveValidationResult } from '../../../actions/actions';
import { validatorMark } from '../../../services/validator/validatorMark';

class InputForm extends React.Component {

    handleChange(e) {
        this.saveInputValue(e.target.value);
    }

    saveInputValue(value) {
        this.props.dispatch(saveFormDataByType(value, this.props.reducerDataType));
    }

    handleSubmit(e) {
        if (e.keyCode !== 13) return;
        this.validateInputValue();
    }

    validateInputValue() {
        const validationPassed = Validator.validate(this.props.value, this.props.validator);
        this.props.dispatch(saveValidationResult(validationPassed, this.props.reducerDataType));
    }

    handleBlur() {
        this.validateInputValue();
        this.props.dispatch(saveFormDataByType(this.props.value, this.props.reducerDataType));
    }

    render() {
        return (
            <div className="inputForm">
                <div className="formTitle">
                    {this.props.title}
                </div>

                <div>
                    <input
                        type="text"
                        value={this.props.value}
                        onChange={(e) => this.handleChange(e)}
                        onBlur={() => this.handleBlur()}
                        onKeyDown={(e) => this.handleSubmit(e)}
                    />

                    <div className="validationError">
                        {(this.props.validationStatus === false) ? "incorrect" : ""}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store, props) => ({
    value: store.formDataReducer[props.reducerDataType],
    validationStatus: store.formDataReducer[props.reducerDataType + validatorMark],
});


export default
    connect(mapStateToProps)(InputForm);
