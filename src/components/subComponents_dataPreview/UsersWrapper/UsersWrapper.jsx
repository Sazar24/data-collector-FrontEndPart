import React from 'react';
import { connect } from 'react-redux';
import SingleUserTile from '../SingleUser/SingleUserTile';
const uuidv1 = require('uuid/v1');

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
                <div className="UsersWrapper">
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