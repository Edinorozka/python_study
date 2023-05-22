import { Button, Form, Input } from 'antd';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createUser} from "../store/actions/userActions";


export const Registration = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    })

    const createUserMethod = async () => {
        if(formData.username && formData.password){
            await createUser(dispatch, formData)
            navigation('/login')
        }
    }

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                autoComplete="off"
            >

                <Form.Item
                    label="Login"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your login!',
                        },
                    ]}
                >
                    <Input value = {formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input value = {formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password value = {formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={() => createUserMethod()}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}