

const Results = ({onReStart}) => {
  return (
    <div id='result'>
      <div className="end">
      <p>총 점수는?</p>
      <h2>｛100점｝</h2>
      <p>〈지식이 탄탄하시군요~!/〉</p>
      <button onClick={onReStart}>다시 시작</button>
      </div>
      <img src="./img/트로피-금색.png"/>
    </div>
    
  )
}

export default Results