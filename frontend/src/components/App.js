import React, {useState} from 'react'
import {Button, Card, Skeleton, Pagination, List, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./store/actions/postsActions";
import {getCategory} from "./store/actions/categoryActions";
import {Navbar} from "./Navbar/Navbar";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./Login/Login";
import {Registration} from "./Regestration/Regestration";
import {UpdatePost} from "./updatePost/UpdatePost";
import {CreatePost} from "./CreatePost/CreatePost";
import {getUser} from "./store/actions/userActions";

function App() {
    const Home = () => {
        const dispatch = useDispatch();
        const {posts, count, loading, pageNumber, success} = useSelector((state) => state.posts)
        const {categories, load, suc} = useSelector((state) => state.categories)
        const {userToken, User} = useSelector(state => state.user)
        const [showEditForm, setShowEditForm] = useState(false)
        const [addPostFlag, setAddPostFlag] = useState(false)
        const navigation = useNavigate()


        React.useEffect(() => {
            getPosts(dispatch, pageNumber)
            dispatch(getCategory)
            //console.log(next.slice(-1))
        }, [pageNumber])

        React.useEffect(() => {
            getUser(dispatch, userToken)
        }, [userToken])


        const updatePostClick = (id = '') => {
            setShowEditForm(!showEditForm)
            navigation(`/update/${id}`)
        }

        const createPostClick = () => {
            setAddPostFlag(true)
            navigation(`/create`)
        }

        const lastClick = () => {
            if (pageNumber !== 1) {
                dispatch({type: 'Post_success', pageNumber: pageNumber - 1})
            }
        }

        const nextClick = () => {
            if(pageNumber !== Math.ceil(count / 5)) {
                dispatch({type: 'Post_success', pageNumber: pageNumber + 1})
            }
        }

        return (
                <div>
                    {loading && !success && load && !suc &&
                        <Skeleton active/>
                    }

                    {!loading && !addPostFlag && User.is_staff === true &&
                        <div style={{marginBottom: 10}}>
                            <Button type={"primary"} onClick={() => createPostClick()}>Add new post</Button>
                        </div>
                    }

                    {!loading && success && !load && suc && posts && posts.length > 0 && !showEditForm &&
                        posts.map((item, index) => {
                            if (item.status === "published") {
                                const categoryIndex = item.category
                                return<Card key={Math.random()} title={item.title} style={{margin: 5}}>
                                    <p style={{wordBreak: 'break-all'}}>{categories[categoryIndex - 1].name}</p>
                                    <p style={{wordBreak: 'break-all'}}>{item.body}</p>
                                    <span>{new Date(item.publish).toUTCString()}</span>
                                    {User.id === item.author &&
                                        <div>
                                            <br/>
                                            <Button type={"primary"} onClick={() => updatePostClick(item.id)}>Edit</Button>
                                        </div>
                                    }
                                </Card>
                            }
                        })
                    }
                    <div style={{display: 'flex', gap: '5px'}}>
                        <Link style={{fontSize: '20px'}} onClick={lastClick}>last</Link>
                        <p style={{fontSize: '20px', margin: '0px'}}>{pageNumber}</p>
                        <Link style={{fontSize: '20px'}} onClick={nextClick}>next</Link>
                    </div>
                </div>
        )
    }
    const NotFoud = () => {
        return (
            <><h1>Page not found!</h1></>
        )
    }
    return (
        <Navbar>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/update/:id'} element={<UpdatePost/>}/>
                <Route path={'/create'} element={<CreatePost/>}/>
                <Route path={'*'} element={<NotFoud/>}/>
            </Routes>
        </Navbar>
    );
}

export default App;