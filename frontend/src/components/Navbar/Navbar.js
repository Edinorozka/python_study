import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Menu, Layout, Button} from 'antd'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/actions/userActions";


const {Content, Footer } = Layout;

export const Navbar = (props) => {
    const {userToken, User} = useSelector(state => state.user)
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const navItems = [
        {
            label: <Link to="/" >Главная</Link>
        },
        {
            label: <Link to="/login" >Вход</Link>
        },
        {
            label: <Link to="/registration" >Регистрация</Link>
        },
    ]

    const exitMethod = () => {
        logoutUser(dispatch, userToken)
        navigation('/')
    }

    return (
        <>
            <div>
                <nav>
                    {!userToken && <Menu mode="horizontal" items={navItems} />}
                    {userToken &&
                        <>
                            <div style={{margin: '10px'}}>
                                <h1>{User.username}</h1>
                                <Button type={"primary"} onClick={exitMethod}>Exit</Button>
                            </div>
                        </>

                    }
                </nav>
            </div>
            <div>
                <Content style={{ padding: '10px 10px' }}>
                    <div className="site-layout-content" style={{ padding: 10, height: '100vh'}}>
                        {props.children}
                    </div>
                </Content>
            </div>
        </>
    )
}