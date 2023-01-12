import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['여행맛집' , '건강정보', '생활정보']);
  let [like, setLike] = useState([0,0,0])  
  let [modal, setModal] = useState(false);
  let [mtitle,setMtitle] = useState(0)
  let [add, setAdd] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div>
        {/* <button onClick={()=>{setTitle(['여자코트 추천','강남 우동맛집', '파이썬독학'])}}> 글제목 수정</button> */}
        <button onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}> 가나다순 정렬 </button>
      </div>

      {/* <div className="list">
        <h4>{title[0]} <span onClick ={()=>{ setLike(like+1)}}> 👍</span> {like} </h4> 
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* map함수 사용 */}

      {
        title.map(function(a,i){
          return(
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setMtitle(i)}}>{title[i]} 
                <span onClick ={(e)=>{
                  e.stopPropagation()
                  
                  let copy = [...like];
                  copy[i] = like[i] + 1;
                  setLike(copy);
                 }}> 👍</span> {like[i]}   &nbsp;&nbsp;
              </h4>

            
              <p>23.01.11 작성</p>
              <button onClick={()=>{
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                 }}
                 > 글삭제</button>
              
            </div>
          )
        })
      }



     <div className ='posting'>
      <input onChange={(e)=>{
        setAdd(e.target.value); console.log(add);
      }}>
      </input>
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(add);
        setTitle(copy);

        let copy2 =[...like];
        copy2[copy2.length] = 0;
        setLike(copy2);
      }}>
        글발행
      </button>
     </div>
      
      {
        modal == true ? <Modal title ={title} mtitle={mtitle} setTitle={setTitle}/> : null
      }


    </div>
  );
}


function Modal(props){
  return(
    <div className='modal'>
    <h4>{props.title[props.mtitle]}</h4>
    <b>How are you?</b>
    <p>I'm fine</p>
    <button onClick={()=>{
      props.setTitle(['여자코트 추천','강남 우동맛집','파이썬독학'])
    }}>글수정</button>
  </div>

  

  );
}

export default App;
