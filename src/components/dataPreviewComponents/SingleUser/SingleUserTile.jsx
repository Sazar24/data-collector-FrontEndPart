import React from 'react';
import "./singleUserTile.css";

export default class SingleUserTile extends React.Component {
    render() {
        return (
            <div className="singleUserTile">
                name: {this.props.data.name} <br />
                surname: {this.props.data.surname} <br />
                town: {this.props.data.town} <br />
                email: {this.props.data.email} <br />

                {/* this is singleUserTile */}
            </div>
        )
    }
}
