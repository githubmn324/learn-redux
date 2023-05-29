import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount, incrementAsync } from './features/counter/counterSlice';
import { addPost, deletePost } from "./features/post/postSlicer";

function App() {
  const count = useSelector((state)=>state.counter.value); // useSelector=状態にアクセスするためのhooks
  const postList = useSelector((state)=>state.posts.value); // useSelector=状態にアクセスするためのhooks
  
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [name, setName] = useState("");
  const [content, setContent]= useState([]);

  const handleClick = () =>{
    dispatch(addPost({
      id: 0,
      name: name,
      content: content
    }));
    setName("");
    setContent("");
  }
  
  return (
    <>
     
     <div className="App"> 
        <h1>カウンターアプリ</h1>
        <h2>count: {count}</h2>
        <div>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
        <div>
          <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
          <button onClick={()=>dispatch(incrementByAmount(incrementAmount))}>入力数分を追加</button>
          {/* <button onClick={()=>dispatch(incrementAsync(incrementAmount))}>遅延追加</button> */}
        </div>
        <h1>React Redux掲示板アプリ</h1>
        <input value={name} type="text" placeholder="名前" onChange={(e)=>setName(e.target.value)}/>
        <input value={content} type="text" placeholder="投稿内容" onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={()=>handleClick()}>投稿</button>
        <div className='displayPosts'>
          {postList.map((post) => (
            <div key={post.id} className='post'>
              <h1 className="postName">{post.name}</h1>
              <p className='postContent'>{post.content}</p>
              <button onClick={()=>dispatch(deletePost(post.id))}>削除</button>
            </div>
          ))}
        </div>
      </div>
    </>
    );
}

export default App;
