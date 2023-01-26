import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";

function Detail(props){


  let {id} = useParams();
  let result = props.shoes.find((x)=>x.id == id)
  let[alert, setAlert] = useState(true)


  useEffect(()=>{
    setTimeout(()=>{setAlert(false) }, 3000,[] )
  });

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
      </div> 
    )
  }

  export default Detail;