import React from 'react';
import { Button } from 'antd'

const PostCard = (props) => (
    <div>
        <h2 style={{padding: "0px 5px", margin: 0, borderBottom: '1px solid black', textAlign: "center", fontSize: 24}}>{props.title}</h2>
        <div style={{padding: "0px 10px"}}>
            <p >{props.body}</p>
            <p >{props.author}</p>
            <p >{props.create}</p>
        </div>
        <div style={{padding: "5px 5px"}}>
            <Button type={"primary"} >Edit</Button>
        </div>

    </div>
);

export default PostCard;