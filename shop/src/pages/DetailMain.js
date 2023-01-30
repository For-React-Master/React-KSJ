import ListGroup from 'react-bootstrap/ListGroup';
import { useState} from "react";
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function DetailMain(props){
    
    let navigate = useNavigate();

    return(
 
     <ListGroup as="ol" numbered>
        
        {
            props.shoes.map((a,i)=>{

                let imgNum = i + 1
                return(
                    <ListGroup.Item as="li">
                    
                        <img src={'https://codingapple1.github.io/shop/shoes'+ imgNum + '.jpg'} width="15%"
                        onClick={()=>{navigate('/detail/' + i )}}/>
                        <p>{props.shoes[i].title}</p>
                    
                    </ListGroup.Item>
                )
            })
        }
      
     </ListGroup>
    
        

    )
   
}

export default DetailMain;