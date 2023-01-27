import { useParams} from "react-router-dom";
import { useEffect, useState, alert} from "react";
import {Nav} from 'react-bootstrap';
function Detail(props){


  let {id} = useParams();
  let result = props.shoes.find((x)=>x.id == id)
  let[alert, setAlert] = useState(true)
  let[tap, setTap] = useState(0)
  


  return(

      
      <div className="container">
            {
              alert == true 
              ? <div style={ {backgroundColor : 'yellow'} }>3초 안에 구매시 할인</div>
              : null
            }
            
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{result.title}</h4>
            <p>{result.content}</p>
            <p>{result.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
          
        </div>
        
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{setTap(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{setTap(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{setTap(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <TabContent tap={tap} setTap={setTap}/>
        

      </div> 
      
  )
  
}

function TabContent({tap}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade('end')}, 100)
   
    return ()=>{
      setFade('')
    }
  }, [tap])

  if(tap == 0){
    return <div className={"start " + fade}>내용0</div>
  }
  if(tap == 1){
    return <div className={"start " + fade}>내용1</div>
  }
  if(tap == 2){
    return <div className={"start " + fade}>내용2</div>
  }
}
  export default Detail;