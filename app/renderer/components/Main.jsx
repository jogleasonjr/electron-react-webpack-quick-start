import React from 'react';
import './../styles/Main.scss';
import Headline from './Headline';

export default class Main extends React.Component {
    render() {
        return (<div className="container">
            <h1>Hello World <img src="images/GitHub-Mark-32px.png" /></h1>
            <p>We are using node {process.versions.node}</p>
            <p>Chrome {process.versions.chrome}</p>
            <p>Electron {process.versions.electron}</p>
            <p>and <Headline />.</p>
        </div>
        );
    }
}