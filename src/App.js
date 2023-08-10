import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


let indexSend = 0;
let [글제목,글제목변경] = useState(['react 공부 1일차','react 공부 2일차','react 공부 3일차']);
let [발행일,발행수정일] = useState(['8월 9일','8월 10일','8월 11일']);
let [추천수,추천수변경] = useState([0,0,0])
let [상세내용,상세내용변경] = useState(["props 활용하여 코딩해보기","redux 활용해서 코딩해보기","for 문 활용해서 코딩해보기"])

// // let ports = 'react 써보기';
// function 함수(){
//     return 100
// }

function 제목바꾸기(){
    var newTitle = [...글제목]; //딥 카피 필요 값 공유 일어남
    newTitle[0] = 'react 공부 10일차';
    글제목변경(newTitle);
    // 글제목변경(['react 공부 10일차','react 공부 2일차','react 공부 3일차']);
}

function 추천수바꾸기(event, index){
    var newLike = [...추천수]; 
    newLike[index] = newLike[index]+1;
    추천수변경(newLike);
}


  return (
    <div className="App"> 
        <div className="black-nav">
            <div /* style={ {color : 'blue', fontSize : 30 }} */>개발 블로그</div>
        </div>
        {글제목.map((titleElem, index) => {
            return (
                <>
                <div ></div>
                <div className = "list">
                    {/* <h3>{글제목[index]}<span onClick={ ()=>{ 추천수변경(추천수[index] +1 )}}>👍</span> {추천수[index]} </h3> */}
                    <h3 style={{float: "left"}} onClick={() => 
                        // indexSend = index
                        alert(index)
                        }>{글제목[index]} <button  onClick={제목바꾸기}>수정</button> 
                    </h3>
                    <h3 style={{float: "left"}} onClick={ (event) =>추천수바꾸기(event,index)}>👍 {추천수[index]}</h3>  
                    <p style={{clear: "both"}}>{발행일[index]}<span>{indexSend}</span></p>
                    <hr style={{clear: "both"}}/>
                </div>
                </>
            );

        })}


    <Modal 글제목={글제목} 발행일={발행일} 상세내용={상세내용} indexSend={indexSend}></Modal>


        {/*
        <div className = "list">
            <h3>{글제목[0]}</h3>
          //  { <h3> {ports}</h3> }
            <p>{발행일[0]}</p>
            <hr/>
        </div>
        */}

        {/* <img src ={logo}/> */}
        {/* <h4> {ports} 점수 { 함수() }</h4> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕하세요
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Modal(props,event){
    return(
    <div className='modal'>
        <h2>{props.글제목[props.indexSend]}</h2>
        <p>{props.발행일[props.indexSend]}</p>
        <p>{props.상세내용[props.indexSend]}</p>
    </div>
    )
}


export default App;
