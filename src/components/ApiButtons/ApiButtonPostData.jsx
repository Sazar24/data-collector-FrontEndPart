import React from 'react';
import "./apiButtons.css";
import { postUserDataToServer } from '../../actions/postDataToServer';
import { postUserDataToServerMock } from '../../actions/postDataToServer';

class ApiButtonPostData extends React.Component {
    handleClick() {
        console.log("kliknąłeś button submit.");
        //tu miejsce na jakiegoś dispatcha i service, żeby wołać axiosem do servera
        postUserDataToServerMock();
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