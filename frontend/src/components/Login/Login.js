import { Button, Form, Input } from 'antd';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/actions/userActions";

export const Login = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {userToken} = useSelector(state => state.user)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })


    const loginUserMethod = async () => {
        await loginUser(dispatch, formData)
        if(userToken.auth_token !== 0) {
            navigation('/')
        } else{
            navigation(0)
        }
    }

    return (
        <div>
            <Form
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
                    <Button type="primary" htmlType="submit" onClick={() => loginUserMethod()}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}