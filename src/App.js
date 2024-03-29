import React, { useMemo, useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyButton from  './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import MyModal from './components/UI/MyModal/MyModal';

function App() {

const [posts, setPosts]= useState([
  {id:1, title:'JavaScript', body:'Description'},
  {id:2, title:'JavaScript2', body:'Description'},
  {id:3, title:'JavaScript3', body:'Description'},  
])

const [filter, setFilter]=useState({sort:'',query:''})
const [modal,setModal]=useState(false)


const sortedPosts=useMemo(()=>{
 
  if(filter.sort){

    return  [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts;

},[filter.sort,posts])
const sortedAndSearchedPosts=useMemo(()=>{
return sortedPosts.filter(post=>post.title.toLocaleLowerCase().includes(filter.query))
}, [filter.query, sortedPosts])

const createPost=(newPost) =>{
  setPosts([...posts, newPost])
  setModal(false)

}
 
 const removePost =(post)=>{
  setPosts(posts.filter(p=>p.id!==post.id))
 }



  return (
    <div className="App">
      <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}> Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
        
        <hr style={{margin: '15px 0'}} />

     <PostFilter 
     filter={filter} 
     setFilter={setFilter}
     />
       
        <PostList  remove={removePost} posts={sortedAndSearchedPosts} title='Post list 1'/>
    </div>
  );
}

export default App;
