
const Categories = ({Categories,onSelect}) => {
  
  return (
    <div id="Categories">
      <h1>아는 만큼 보이는 웹<br/>〈기초/〉퀴즈</h1>
      <h3>주제를 선택해 주세요</h3>
        <ul>
            {
                Categories.map((item,idx)=>{
                    return (
                    <li key={idx} onClick={()=>{onSelect(item.title)}}
                    >
                      <img src={`${process.env.PUBLIC_URL}/img/${item.imgPath}`} alt="icon이미지"/>
                      <p>{item.title}</p>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Categories