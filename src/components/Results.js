

const Results = ({onReStart,score,}) => {
  return (
    <div id='result'>
      <div className="end">
      <p>총 점수는?</p>
      <h2 className="score-animate">{score}점</h2>
        <button onClick={onReStart}>
          다시 시작
        </button>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/트로피-금색.png`} alt="트로피 아이콘" />
    </div>
    
  )
}

export default Results

