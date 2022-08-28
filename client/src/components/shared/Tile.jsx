import React from 'react';
import Body from '../body/Body';
import Button from './Button';

export default function Tile(props) {
    const { content, buttonText, width } = props;

    return (
        <Body style={{ width: width }}>
            <h2>{content.title}</h2>
            {content.org ? <p>{content.org}</p> : <div></div>}
            <h3>{new Date(content.published).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            <Button type='tile'
                clicked={false}
                onClick={() => { window.open(content.link, '_blank', 'noopener,noreferrer') }}>
                {buttonText}
            </Button>
        </Body>
    )
}