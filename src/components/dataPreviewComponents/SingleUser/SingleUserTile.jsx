import React from 'react';
import "./singleUserTile.css";
import ButtonDeleteRecordByID from '../../ApiButtons/ButtonDeleteRecordByID';

export default class SingleUserTile extends React.Component {
    render() {

        // let dateAsString = "";

        // if (this.props.data.date !== undefined && this.props.data.date !== null) {
        //     const date = this.props.data.date;
        //     dateAsString = `${date.getFullYear()} `
        //         + `/ ${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1} `
        //         + `/ ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} `;
        // }

        return (
            <div className="singleUserTile">
                <div style={{ "color": "darkblue" }}>
                    id: {this.props.data._id}
                </div>

                name: {this.props.data.name} <br />
                surname: {this.props.data.surname} <br />
                town: {this.props.data.town} <br />
                email: {this.props.data.email} <br />
                {/* date: {dateAsString} */}
                date: {this.props.data.date}

                <ButtonDeleteRecordByID id={this.props.data._id} />

            </div>
        )
    }
}
