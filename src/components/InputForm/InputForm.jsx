import React from 'react';
// import { changeDisplayedTextAction } from '../../../actions/exampleAction';
import "./inputForm.css";
import Validator from '../../services/validator/Validator';
// import { Validator } from '../../services/validator/Validator';

export class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            validationMessage: "",
        }
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    validateText() {
        //validate this.state.text
        validationMessage = Validator.validate(this.state.text, this.props.dataType);
    }

    render() {
        return (
            <div className="inputForm">
                <div className="formTitle">
                    {this.props.title}
                </div>

                <span>
                    <input
                        type="text"
                        onChange={(e) => this.handleChange(e)}
                        onBlur={() => this.validateText()}
                    />

                    <div className="validationError">
                        {this.state.validationMessage}
                    </div>
                </span>
            </div>
        )
    }
}
