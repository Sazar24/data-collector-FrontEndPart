import React from 'react';
import "./singleUserTile.css";

export default class SingleUserTile extends React.Component {
    render() {
        console.log("inside singleUserTile: ", this.props.data);

        return (
            <div className="singleUserTile">
                {this.props.data.name} <br />
                {this.props.data.surname} <br />
                {this.props.data.town} <br />
                {this.props.data.email} <br />

                {/* this is singleUserTile */}
            </div>
        )
    }
}
