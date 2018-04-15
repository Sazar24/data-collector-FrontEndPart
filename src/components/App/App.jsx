import React from 'react';
import { Inputter } from '../Inputter/Inputter';
import "./app.css"
import Preview from '../Preview/Preview';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1> hello, human! </h1>
                This is just a simple template, or starter or even boilerplate -if you wish to call that so :) <br />
                It contains a simple redux template-App, with multiReducer already plugged-in. <br />
                Propably I'll put into this project more things with time.
                <br />
                Good luck!
                <br />
                <br />
                <br />

                <Inputter />
                <Preview />
                <Preview />
            </div>
        )
    }
}

