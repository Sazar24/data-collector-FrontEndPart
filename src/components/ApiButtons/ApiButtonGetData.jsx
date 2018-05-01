import React from 'react';
import "./apiButtons.css";
import { getUsersData_Mock, getUserDataFromServer } from '../../actions/getDataFromServer';

class ApiButtonGetData extends React.Component {
    handleClick() {
        console.log("kliknąłeś button GetData.");
        // getUsersData_Mock();
        getUserDataFromServer();
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