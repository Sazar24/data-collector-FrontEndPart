import React from 'react';
import "./singleUserTile.css";
import ButtonDeleteRecordByID from '../../ApiButtons/ButtonDeleteRecordByID';

export default class SingleUserTile extends React.Component {
    render() {
        return (
            <div className="singleUserTile">
                <div style={{ "color": "darkblue" }}>
                    id: {this.props.data._id}
                </div>

                name: {this.props.data.name} <br />
                surname: {this.props.data.surname} <br />
                town: {this.props.data.town} <br />
                email: {this.props.data.email} <br />
                date: {this.props.data.date}

                <ButtonDeleteRecordByID id={this.props.data._id} />

            </div>
        )
    }
}
