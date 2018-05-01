import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import SingleUserTile from '../SingleUser/SingleUserTile';
import './usersWrapper.css';

class UsersWrapper extends React.Component {
    render() {
        if (this.props.users === undefined || this.props.users === null)
            return (
                <div className="UsersWrapper">
                    click button above to download users data
                </div>
            )
        else
            return (
                <div className="usersWrapper">
                    {this.props.users.map((userData, index) => {
                        return <SingleUserTile
                            data={userData}
                            key={uuidv1()}
                        />
                    })}
                </div>
            )
    }
}

const mapStateToProps = (store) => ({
    users: store.ServerDataReducer.users
});

export default
    connect(mapStateToProps)(UsersWrapper);