import React from 'react';
import "./apiButtons.css";
// import ServersApiCaller from '../../actions/ServersApiCaller';
import UsersService from '../../services/Users/UsersService';


class ButtonDeleteRecordByID extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        UsersService.deleteRecord(this.props.id);
        // ServersApiCaller.deleteRecord(this.props.id);
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