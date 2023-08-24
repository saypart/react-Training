import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let abc = new Date();    
console.log(abc);

let [글제목,글제목변경] = useState(['react 공부 1일차','react 공부 2일차','react 공부 3일차']);
let [발행일,발행수정일] = useState([abc,abc,abc]);
let [추천수,추천수변경] = useState([0,0,0])
let [상세내용,상세내용변경] = useState(["props 활용하여 코딩해보기","redux 활용해서 코딩해보기","for 문 활용해서 코딩해보기"])
let [현재위치,현재위치변경] = useState([0])
let [이미지,이미지변경] = useState(['./logo192.png','./react.png',logo])
let [제목수정,제목수정변경] = useState('none') 
let [전체수정,전체수정변경] = useState('none') 
let [새글작성,새글작성변경] = useState('none')

// // let ports = 'react 써보기';
// function 함수(){
//     return 100
// }

function 제목바꾸기(reTitleValue){
    var newTitle = [...글제목]; //딥 카피 필요 값 공유 일어남
    newTitle[현재위치] = reTitleValue;
    // newTitle[index] = 'react 공부 10일차';
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
            <div /* style={ {color : 'blue', fontSize : 30 }} */>개발 블로그
            <button onClick={(event) => 새글작성변경('block')} style={{float:"right"}}>글쓰기</button>
            </div>
        </div>
        {글제목.map((titleElem, index) => {
            return (
                <>
                <div className = "list">
                    {/* <h3>{글제목[index]}<span onClick={ ()=>{ 추천수변경(추천수[index] +1 )}}>👍</span> {추천수[index]} </h3> */}
                    <h3 style={{float: "left"}}
                    onClick={(event) => {현재위치변경(index)}}
                    title='눌러서 상세페이지를 볼수 있습니다.'
                    // onMouseEnter = {() => }
                    // onMouseLeave = {() => } 
                    >{글제목[index]} 
                    </h3>
                    <h5 style={{float: "left"}}>&nbsp;&nbsp;&nbsp;{시간변환(발행일[index])}</h5>
                    <h3 style={{float: "right"}} onClick={ (event) =>추천수바꾸기(event,index)}>👍 {추천수[index]}</h3>
                    <hr style={{clear: "both"}}/>
                </div>
                </>
            );
        })}
    
        {/* 제목수정창 */}
    <div className='titleEditWindow' style={{display :[제목수정]}}>
        <input id='reTitle'></input>
        <button  onClick={(event) => {
            let reTitleValue = document.getElementById('reTitle').value
            제목바꾸기(reTitleValue)
            제목수정변경('none');
            }}>수정</button>
    </div>


        {/* 새글작성창*/}
    <div className='titleEditWindow' style={{display :[새글작성]}}>
        <input id='createTitle'></input>
        <input id='createContent'></input>
        <input id='newImg'></input>
        <button  onClick={(event) => {
            let createTitle = document.getElementById('createTitle').value
            let date = new Date();
            let createContent = document.getElementById('createContent').value
            let createImg = document.getElementById('createContent').value
            

            var newTitle = [...글제목];
            newTitle.push(createTitle);
            글제목변경(newTitle);

            var newDate = [...발행일];
            newDate.push(date);
            발행수정일(newDate);
    
            var newLikeCount = [...추천수];
            newLikeCount.push(0);
            추천수변경(newLikeCount);

            var newContent = [...상세내용]
            newContent.push(createContent);
            상세내용변경(newContent);

            var newImg = [...이미지]
            newImg.push(createImg);
            이미지변경(newImg);
            
            
            새글작성변경('none');
            }}>작성</button>
    </div>


{/*상세내용 출력모달창*/}
    <Modal 글제목={글제목} 제목수정변경={제목수정변경} 전체수정변경={전체수정변경} 발행일={발행일} 상세내용={상세내용} 현재위치={현재위치} 이미지={이미지}> </Modal>
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
        <h2>{props.글제목[props.현재위치]}
            <button  onClick={(event) => {
                props.제목수정변경('block');
                }}>수정</button>
            <button  onClick={(event) => {
                props.전체수정변경('block');
                }}>전체수정</button>
        </h2>
        <p>{시간변환(props.발행일[props.현재위치])}</p>
        <img src= {props.이미지[props.현재위치]}/>
        <p>{props.상세내용[props.현재위치]}</p>
    </div>
    )
}

function 시간변환(date){
    let 월 = date.getMonth()+1;
    let 일 = date.getDate();
    let 시 = date.getHours();
    let 분 = date.getMinutes();
    let createDate = 월+"월 "+일+"일 "+시+":"+분 ;
    return createDate
}


export default App;
