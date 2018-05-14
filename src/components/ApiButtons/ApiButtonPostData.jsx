import React from 'react';
import { connect } from 'react-redux';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';
import ReduxActions from '../../actions/reduxActions';
import { clearMainForm } from '../../actions/actions';

class ApiButtonPostData extends React.Component {
    handleClick() {
        // ServersApiCaller.postUserData(); // TODO: rename to UsersService.Add
        console.log("guzik chwilowo wyłączony - na czas developmentu ");
        // ReduxActions.clearMainForm();
        this.props.dispatch(clearMainForm());
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

export default connect()(ApiButtonPostData);