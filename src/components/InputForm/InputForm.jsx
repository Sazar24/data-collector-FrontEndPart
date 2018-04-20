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
        this.setState({
            text: e.target.value
        })
    }

    validateText() {
        const validationStatus = Validator.validate(this.state.text, this.props.dataValidationType);
        const newValidationMessage = validationStatus ? "" : "incorrect";

        this.setState({
            validationMessage: newValidationMessage,
        })

        if (validationStatus) saveDataAction(this.state.text, this.props.dataType)
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
                        onBlur={() => this.validateText()}
                    />

                    <div className="validationError">
                        {this.state.validationMessage}
                    </div>
                </div>
            </div>
        )
    }
}
