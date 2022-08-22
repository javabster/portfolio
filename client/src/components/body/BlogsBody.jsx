import React, { useContext } from 'react';
import { AppContext } from '../app/App';
import Tile from '../shared/Tile';

export default function BlogsBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '50px' }}>Articles (first author)</h1>
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
            <h1 style={{ textAlign: 'center', margin: '50px' }}>Other Articles (co-author/editor)</h1>
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