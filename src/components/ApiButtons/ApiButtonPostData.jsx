import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';
import ReduxActions from '../../actions/reduxActions';

class ApiButtonPostData extends React.Component {
    handleClick() {
        ServersApiCaller.postUserData(); // TODO: rename to UsersService.Add
        ReduxActions.clearMainForm();
    }
    // TODO: input --> button
    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <button onClick={() => this.handleClick()} >
                        post-user-data
                    </button>
                </div>
                

                 <div className="wholeFormValidationStatus">
                {/* //     tu miejsce na komunikaty o walidacji - np "wypełnij wszystkie pola"/"wypełnij poprawnie cały formularz" */}
                 </div>
            </div>
        )
    }
};

export default ApiButtonPostData;