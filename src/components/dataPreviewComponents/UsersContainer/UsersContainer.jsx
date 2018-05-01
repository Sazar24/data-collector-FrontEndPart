import React from 'react';
import ApiButtonGetData from '../../ApiButtons/ApiButtonGetData';
import SingleUserTile from '../SingleUser/SingleUserTile';
import UsersWrapper from '../UsersWrapper/UsersWrapper';
import "./usersContainer.css";

export default class UsersContainer extends React.Component {
    render() {
        return (
            <div className="usersContainer">
                <div>
                    <ApiButtonGetData />
                </div>
                <div>
                    <UsersWrapper />
                </div>

            </div>
        )
    }
}