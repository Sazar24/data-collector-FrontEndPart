import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';


class ButtonDeleteRecordByID extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        ServersApiCaller.deleteRecord(this.props.id);
    }

    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <input
                        type="submit"
                        value="delete me"
                        onClick={() => this.handleClick()}
                    />
                </div>
            </div>
        )
    }
};

export default ButtonDeleteRecordByID;