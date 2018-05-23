import React from 'react';
import { connect } from 'react-redux';
import "./apiButtons.css";
import ReduxActions from '../../actions/reduxActions';
import { clearMainForm } from '../../actions/actions';
import Validator from '../../services/validator/Validator';
import UsersService from '../../services/Users/UsersService';

class ApiButtonPostData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            validationMsg: ''
        }

    }
    handleClick() {
        const { formValues, dispatch } = this.props;

        if (Validator.isFormComplete(formValues)) {
            this.setState({ validationMsg: '' });
            UsersService.postUserData(); // TODO: rename to UsersService.Add
            dispatch(clearMainForm());
            console.log("wysłano dane formularza. Jest ok");
        }
        else {
            this.setState({ validationMsg: 'form is not filled completly or properly' });
        }
    }
    render() {
        return (
            <div className="buttonSpace" >
                <div className="singlenButton">
                    <button onClick={() => this.handleClick()} >
                        post-user-data
                    </button>
                </div>


                <div className="wholeFormValidationStatus">
                    {this.state.validationMsg}
                </div>
            </div>
        )
    }
};
const mapStateToProps = store => ({
    formValues: store.formDataReducer,
})
export default connect(mapStateToProps)(ApiButtonPostData);