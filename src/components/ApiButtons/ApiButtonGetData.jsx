import React from 'react';
import "./apiButtons.css";
import { getUsersData_Mock } from '../../actions/getDataFromServer';

class ApiButtonGetData extends React.Component {
    handleClick() {
        console.log("kliknąłeś button GetData.");
        //tu miejsce na jakiegoś dispatcha i service, żeby wołać axiosem do servera
        getUsersData_Mock();
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