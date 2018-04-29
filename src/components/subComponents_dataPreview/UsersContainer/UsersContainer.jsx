import React from 'react';
import { connect } from 'react-redux';
import "./usersContainer.css";
import ApiButtonGetData from '../../ApiButtons/ApiButtonGetData';
import SingleUserTile from '../SingleUser/SingleUserTile';
import UsersWrapper from '../UsersWrapper/UsersWrapper';
const uuidv1 = require('uuid/v1');

export default class UsersContainer extends React.Component {
    render() {
        console.log("UsersContainer -this.props.users: ", this.props.users);

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