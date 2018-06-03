import React from 'react';
import { connect } from 'react-redux';
import "./inputForm.css";
import Validator from '../../../services/validator/Validator';
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
        const { value, validator, reducerDataType, dispatch } = this.props;

        const validationPassed = Validator.validate(value, validator);
        dispatch(saveValidationResult(validationPassed, reducerDataType));
    }

    handleBlur() {
        const { dispatch, value, reducerDataType } = this.props;

        this.validateInputValue();
        dispatch(saveFormDataByType(value, reducerDataType));
    }

    handleFocus() {
        this.clearValidationMsg();
    }

    clearValidationMsg() {
        const { reducerDataType, dispatch } = this.props;
        dispatch(saveValidationResult(null, reducerDataType));

    }

    render() {
        const { value, title, validationStatus } = this.props;
        return (
            <div className="inputForm">
                <div className="formTitle">
                    {title}
                </div>

                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => this.handleChange(e)}
                        onBlur={() => this.handleBlur()}
                        onKeyDown={(e) => this.handleSubmit(e)}
                        onFocus={() => this.handleFocus()}
                    />

                    <div className="validationError">
                        {(validationStatus === false) ? "incorrect" : ""}
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
