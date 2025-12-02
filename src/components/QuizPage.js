import { useState } from "react"

const QuizPage = ({quizes,onFinish,onScore,score}) => {
  console.log(quizes);
const [current,setCurrent] = useState(0);
    const handleClick = (idx) =>{
      //정답체크
      if(idx+1 === quizes[current].correct){
        //점수를 +20
        onScore();
      }
        if(current+1 < quizes.length){
            setCurrent(current+1);
        }else{
            onFinish(true);
        }
    }
  return (
    <div id="quiz-page">
      <div className="top"> 
        <img src="./img/html-2.png"/>
        <h3>({current+1}/{quizes.length})</h3>
        </div>
        <div className="botton"> 
        <p>{quizes[current].question}</p>
        <ul className="choices">
            {quizes[current].choices.map((item, idx) => (
            <li key={idx}
            onClick={()=>{handleClick(idx)}}>
            {idx + 1}. {item}
            </li>
        ))}
        </ul>
        <p>중간 점수: {score}</p>
        </div>
        </div>
  )
}

export default QuizPage