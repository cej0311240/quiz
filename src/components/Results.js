

const Results = ({onReStart,score}) => {
  return (
    <div id='result'>
      <div className="end">
      <p>총 점수는?</p>
      <h2 className="score-animate">{score}점</h2>
      <buttom onClick={onReStart}>다시 시작</buttom>
      </div>
      <img src="./img/트로피-금색.png"/>
    </div>
    
  )
}

export default Results

