import React from 'react';
import "./apiButtons.css";
import ServersApiCaller from '../../actions/ServersApiCaller';


class ButtonDeleteRecordByID extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        // reload tablicy/reduxa po usunięciu pojedynczego
        // const deleteSuccess = ServersApiCaller.deleteRecord(this.props.id);
        // if (deleteSuccess) 
        // ServersApiCaller.getUsers;

        ServersApiCaller.deleteRecord(this.props.id);
    }

    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <input
                        type="submit"
                        value="delete me"
                        onClick={() => this.handleClick()}
                    />
                </div>

                {/* <div className="wholeFormValidationStatus"> 
                    tu miejsce na komunikaty o walidacji - np "wypełnij wszystkie pola"/"wypełnij poprawnie cały formularz"
                </div> */}
            </div>
        )
    }
};

export default ButtonDeleteRecordByID;