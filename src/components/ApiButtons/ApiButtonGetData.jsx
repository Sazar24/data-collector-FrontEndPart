import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';

class ApiButtonGetData extends React.Component {
    handleClick() {
        ServersApiCaller.getUsers();
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