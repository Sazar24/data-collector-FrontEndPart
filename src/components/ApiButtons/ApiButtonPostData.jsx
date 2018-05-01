import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';


class ApiButtonPostData extends React.Component {
    handleClick() {
        console.log("kliknąłeś button submit.");
        ServersApiCaller.postUserData();
    }
 
    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <input
                        type="submit"
                        value="post user-data"
                        onClick={() => this.handleClick()}
                    />
                </div>

                <div className="wholeFormValidationStatus">
                    {/* tu miejsce na komunikaty o walidacji - np "wypełnij wszystkie pola"/"wypełnij poprawnie cały formularz" */}
                </div>
            </div>
        )
    }
};

export default ApiButtonPostData;