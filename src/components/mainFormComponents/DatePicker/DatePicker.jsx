import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import "../InputForm/inputForm.css";
import ReduxActions from '../../../actions/reduxActions';

export default class DatePickForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      controlledDate: null,
    };
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date,
    });
    
    // console.log(`You have picked : `
    //   + `${date.getFullYear()} `
    //   + `/ ${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()+1} `
    //   + `/ ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} `
    // );
    
    const dateAsString = `${date.getFullYear()} `
      + `/ ${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1} `
      + `/ ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} `;

    ReduxActions.saveData(dateAsString, this.props.reducerDataType);
  };

  render() {
    return (
      <div className="inputForm">
        <div className="formTitle">
          {this.props.title}
        </div>

        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <DatePicker
              hintText="Pick a date"
              value={this.state.controlledDate}
              onChange={(event, date) => this.handleChange(event, date)}
              formatdate="DD MM YYYY"
            />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
