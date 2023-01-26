
import './App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";
import {useState} from "react";
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
function App() {


  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className='App'>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Discernment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path ="/" element={<>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              
              {
                shoes.map((a,i)=>{
                  return(
                  <Card shoes={shoes[i]} i={i+1} navigate={navigate} ></Card>
                  )
                })
              }
        
            </div>
          </div> 
        </>}/>
        <Route path ="/detail/:id" element={<Detail shoes={shoes} navigate={navigate}/>}/>
        
        <Route path="*" element={<>없는페이지임</>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버들</div>}/>
          <Route path="location" element={<div>회사위치</div>}/>
        </Route>
       
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){


  return(
    
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+props.i+ '.jpg'} width="80%"/>
        <h4> {props.shoes.title} </h4>
        <p> {props.shoes.content} </p>
      </div>
    )

  
}



export default App;
