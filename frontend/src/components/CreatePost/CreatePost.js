import {Button, Cascader, Checkbox, Form, Input} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {createPost, getPost, updatePost} from "../store/actions/postsActions";


export const CreatePost = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const {User} = useSelector(state => state.user)
    const [editedPost, setEditedPost] = useState({
        title: '',
        category: '',
        body: '',
        status: 'published',
        author: User.id
    })

    const CreatePostMethod = () => {
        createPost(dispatch, editedPost)
        navigation('/')
    }

    const CheckBoxOnChange = (e) => {
        if(e.target.checked === true){
            editedPost.status = 'published'
        } else editedPost.status = 'draft'
    }

    return <div>
        <Form>
            <Form.Item label={'title'}>
                <Input value = {editedPost.title} onChange={(e) => setEditedPost({...editedPost, title: e.target.value})}/>
            </Form.Item>
            <Form.Item label={'category number'}>
                <Input.TextArea value = {editedPost.category} onChange={(e) => setEditedPost({...editedPost, category: e.target.value})}/>
            </Form.Item>
            <Form.Item label={'text'}>
                <Input.TextArea value = {editedPost.body} onChange={(e) => setEditedPost({...editedPost, body: e.target.value})}/>
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={CheckBoxOnChange}>Published</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type={"primary"} onClick={() => CreatePostMethod()}>Save</Button>
            </Form.Item>
        </Form>
    </div>
}