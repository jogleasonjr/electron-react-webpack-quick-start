import React from 'react';
import './../styles/Headline.scss';

export default class Headline extends React.Component {
    render() {
        const text = 'React';
        return <span className="Headline-label">{text}</span>;
    }
}