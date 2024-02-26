import React, { useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

import PostList from './components/PostList';
import MyButton from  './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm';
function App() {

const [posts, setPosts]= useState([
  {id:1, title:'JavaScript', body:'Description'},
  {id:2, title:'JavaScript2', body:'Description'},
  {id:3, title:'JavaScript3', body:'Description'},  
])


const createPost=(newPost) =>{
  setPosts([...posts, newPost])
}
 
 const removePost =(post)=>{
  setPosts(posts.filter(p=>p.id!==post.id))
 }



  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length !==0
        ?<PostList  remove={removePost} posts={posts} title='Post list 1'/>
          : 
          <h1 style={{textAlign: 'center'}}> 
          Posts undefined!
          </h1>
      }
   
    </div>
  );
}

export default App;
