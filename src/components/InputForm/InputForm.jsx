import React from 'react';
import "./inputForm.css";
import Validator from '../../services/validator/Validator';
import { saveDataAction } from '../../actions/saveDataAction';

export class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            validationMessage: '',
        }
    }

    handleChange(e) {
        this.saveInputValue(e.target.value);
    }

    saveInputValue(value) {
        this.setState({
            text: value
        });
    }

    printErrorMessage(msg) {
        this.setErrorMessage(msg);
    }

    setErrorMessage(newValidationMessage) {
        this.setState({
            validationMessage: newValidationMessage,
        });
    }

    handleBlur() {
        if (Validator.validate(this.state.text, this.props.validator)) {
            this.printErrorMessage("");
            saveDataAction(this.state.text, this.props.reducerDataType);
        }
        else {
            this.printErrorMessage("incorrect");
        }

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
                        onChange={(e) => this.handleChange(e)}
                        onBlur={() => this.handleBlur()}
                    />

                    <div className="validationError">
                        {this.state.validationMessage}
                    </div>
                </div>
            </div>
        )
    }
}
