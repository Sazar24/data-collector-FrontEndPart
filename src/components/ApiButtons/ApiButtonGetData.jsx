import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';

class ApiButtonGetData extends React.Component {
    handleClick() {
        console.log("kliknąłeś button GetData.");
        ServersApiCaller.getUsers();
    }

    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <input
                        type="submit"
                        value="get user-data"
                        onClick={() => this.handleClick()}
                    />
                </div>
            </div>
        )
    }
};

export default ApiButtonGetData;