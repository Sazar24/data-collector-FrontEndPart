import React from 'react';
import { changeDisplayedTextAction } from '../../actions/exampleAction';

export class Inputter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
        // changeDisplayedTextAction(e.target.value);
    }

    handleOnKeyDown(e) {
        if (e.keyCode == 13) {
            changeDisplayedTextAction(this.state.text);
        }
    }
    render() {
        return (
            <div>
                Please input some value. It will go to global-redux state.
                <input
                    type="text"
                    onChange={(e) => this.handleTextChange(e)}
                    onSubmit={() => this.saveText()}
                    onKeyDown={(e) => this.handleOnKeyDown(e)}
                />
            </div>
        )
    }
}
