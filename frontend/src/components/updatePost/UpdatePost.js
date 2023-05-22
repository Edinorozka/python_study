import {Button, Form, Input} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getPost, updatePost} from "../store/actions/postsActions";


export const UpdatePost = () => {
    const { post } = useSelector((state) => state.posts)
    const navigation = useNavigate()
    const params = useParams()
    const { id } = params
    const dispatch = useDispatch()
    const [editedPost, setEditedPost] = useState({
        title: '',
        category: '',
        body: '',
    })

    useEffect(() => {
        dispatch(getPost(id));
    }, []);

    useEffect(() => {
        setEditedPostMethod()
    }, [post]);

    const setEditedPostMethod = () => {
        if (post){
            setEditedPost({
                ...editedPost,
                title: post.title,
                category: post.category,
                body: post.body,
                author: post.author
            })
        }
    }

    const updatePostMethod = () => {
        updatePost(dispatch, id, editedPost)
        navigation('/')
    }

    return <div>
        <Form>
            <Form.Item label={'title'}>
                <Input value = {editedPost.title} onChange={(e) => setEditedPost({...editedPost, title: e.target.value})}/>
            </Form.Item>
            <Form.Item label={'category'}>
                <Input.TextArea value = {editedPost.category} onChange={(e) => setEditedPost({...editedPost, category: e.target.value})}/>
            </Form.Item>
            <Form.Item label={'text'}>
                <Input.TextArea value = {editedPost.body} onChange={(e) => setEditedPost({...editedPost, body: e.target.value})}/>
            </Form.Item>

            <Form.Item>
                <Button type={"primary"} onClick={() => updatePostMethod()}>Save</Button>
            </Form.Item>
        </Form>
    </div>
}