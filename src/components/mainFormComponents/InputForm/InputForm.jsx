import React from 'react';
import { connect } from 'react-redux';
import "./inputForm.css";
import Validator from '../../../services/validator/Validator';
import ReduxActions from '../../../actions/reduxActions';
import { saveFormDataByType } from '../../../actions/actions';

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
        const validationPassed = Validator.validate(this.props.thisFormValue, this.props.validator);
        if (validationPassed)
            this.props.dispatch(saveFormDataByType(validationPassed, this.props.reducerDataType + "_isValid"));
        else this.props.dispatch(saveFormDataByType(validationPassed, this.props.reducerDataType + "_isValid"));
        // if (Validator.validate(this.state.text, this.props.validator)) {
        //     this.printErrorMessage("");
        //     ReduxActions.saveDakta(this.state.text, this.props.reducerDataType);
        // }
        // else {
        //     this.printErrorMessage("incorrect");
        // }

    }
    // printErrorMessage(msg) {
    //     this.setErrorMessage(msg);
    // }

    // setErrorMessage(newValidationMessage) {
    //     this.setState({
    //         ...this.state, validationMessage: newValidationMessage,
    //     });
    // }

    handleBlur() {
        this.props.dispatch(saveFormDataByType(this.props.thisFormValue, this.props.reducerDataType));

        this.validateInputValue();
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
                        value={this.props.thisFormValue}
                        onChange={(e) => this.handleChange(e)}
                        onBlur={() => this.handleBlur()}
                        onKeyDown={(e) => this.handleSubmit(e)}
                    />

                    <div className="validationError">
                        {/* {this.state.validationMessage} */}
                        {/* {(this.props.thisFormValidationStatus !== undefined || this.props.thisFormValidationStatus === false) ? */}
                        {(this.props.thisFormValidationStatus === false) ?
                            "incorrect" : ""}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store, props) => ({
    thisFormValue: store.formDataReducer[props.reducerDataType],
    thisFormValidationStatus: store.formDataReducer[props.reducerDataType + "_isValid"], // brzydka sztuczka, ale jest 2.00 w nocy... // TODO
});


export default
    connect(mapStateToProps)(InputForm);
