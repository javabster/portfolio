import React, { useContext } from 'react';
import { AppContext } from '../app/App';
import Tile from '../shared/Tile';
import Heading from '../shared/Heading';

export default function BlogsBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <Heading style={{ textAlign: 'center', margin: '20px' }}>Articles (first author)</Heading>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.blogs.blogsList.map((blog, idx) => {
                    if (blog.type == 'author') {
                        return <Tile content={blog} buttonText='Read Me!' key={idx} width='25%'></Tile>
                    }
                })}
            </div>
            <Heading style={{ textAlign: 'center', margin: '50px' }}>Other Articles (co-author/editor)</Heading>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.blogs.blogsList.map((blog, idx) => {
                    if (blog.type != 'author') {
                        return <Tile content={blog} buttonText='Read Me!' key={idx} width='25%'></Tile>
                    }
                })}
            </div>
        </div >
    )
}