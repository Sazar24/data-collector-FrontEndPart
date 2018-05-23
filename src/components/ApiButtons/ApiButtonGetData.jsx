import React from 'react';
import "./apiButtons.css";
import UsersService from '../../services/Users/UsersService';

class ApiButtonGetData extends React.Component {
    handleClick() {
        UsersService.getUsers();
    }

    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <button onClick={() => this.handleClick()}>
                        get user-data
                    </button>
                </div>
            </div>
        )
    }
};

export default ApiButtonGetData;