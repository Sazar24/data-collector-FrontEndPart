import React from 'react';
import { connect } from 'react-redux';
import "./preview.css";

class Preview extends React.Component {
    render() {
        return (
            <div>
                Text you have entered in another component and passed here
                by reduxStore is: {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    text: store.exampleReducer.text
});

export default
    connect(mapStateToProps)(Preview);