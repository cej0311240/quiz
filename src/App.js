import "./App.css";
import Results from './components/Results';
import { useState } from 'react';
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import QuizPage from "./components/QuizPage";
const App = () => {
  const [category,setCategory] = useState('');
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finish,setFinish] = useState(false);
  const [score,setScore] = useState(0);
 const onSelectCategory = (Select) => {
  setCategory(Select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듬.

  const quizes = quizData.quizzes.filter((data) =>
    data.category.toLowerCase().trim() === Select.toLowerCase().trim()
  );
   setFilterQuiz(quizes);
  }
const handleRestart = () =>{
  setCategory('');
  setFilterQuiz([]);   // ⬅ 이 줄이 없어서 다시 시작이 안 됨!!!
  setFinish(false);
  setScore(0);
}
  const handlescore = ()=>{
    //이전에 가진 값에 +20
    setScore((prev)=>{return prev+20});
  }
  return (
    <div id='app'>
      {
      !category && !finish && <Categories
      Categories={quizData.Categories}
      onSelect={onSelectCategory}
      />
      }
      {
      category &&  !finish &&  <QuizPage 
                    quizes={filterQuiz} 
                    onFinish={setFinish}
                    onScore={handlescore}
                    score={score}
                    onReStart={handleRestart} 
                    />
      //카테고리 클릭 하기 전에는 안 보이게 &&로 처리
      }
      {/* <p>APP SCORE:{score}</p> */}
      {/* {
        finish && < Results onReStart={handleRestart}/>
      } */}
      {finish && < Results onReStart={handleRestart} score={score} />}
    </div>
  )
}

export default App
