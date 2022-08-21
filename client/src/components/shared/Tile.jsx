import React from 'react';
import Body from '../body/Body';
import Button from './Button';

export default function Tile(props) {
    const { content, idx, width } = props;

    return (
        <Body style={{ width: width }} key={idx}>
            <h2>{content.title}</h2>
            <h3>{new Date(content.published).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            <Button type='tile'
                clicked={false}
                onClick={() => { window.open(content.link, '_blank', 'noopener,noreferrer') }}>
                Read Me!
            </Button>
        </Body>
    )
}