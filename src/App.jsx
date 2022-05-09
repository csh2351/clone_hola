import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main/main';
import Study from './page/study/study';
import MyLikes from './page/my_likes/myLikes';
import MyPosts from './page/my_posts/myPosts';
import Register from './page/register/Register';
import Settings from './page/settings/Settngs';
import Signup from './page/signup/signup';
import NotFound from 'page/notFound/notFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/main'} element={<Main />} />
                <Route path={'/study/*'} element={<Study />} />
                <Route path={'/myLikes'} element={<MyLikes />} />
                <Route path={'/myPosts'} element={<MyPosts />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/signup'} element={<Signup />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Router>
    );
};

export default App;
