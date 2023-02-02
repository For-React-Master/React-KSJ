
import './App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styled from "styled-components";
import {useEffect, useState} from "react";
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';
import DetailMain from './pages/DetailMain';

function App() {

  useEffect(()=>{
    if(localStorage.getItem('watched') == null){ 
      localStorage.setItem('watched', JSON.stringify([]))}
  })

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();
  let [add, setAdd] = useState('')
  let recently = localStorage.getItem('watched')

  return (
    <div className='App'>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Discernment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/*')}}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path ="/" element={<>
          <div className='main-bg'></div>
          <div className="container">
            <div className='recently'>
              <p>최근본상품
              {
                recently
              }
              </p>
              
              
            </div>
            
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
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              
              let copy =[...shoes, ...result.data]
              setShoes(copy);
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>상품 더보기</button>
        </>}/>
        <Route path ="/detail" element={<DetailMain shoes={shoes} navigate={navigate}/>}/>
        <Route path ="/detail/:id" element={<Detail shoes={shoes} navigate={navigate}/>}/>
        
        <Route path="*" element={<>없는페이지임</>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버들</div>}/>
          <Route path="location" element={<div>회사위치</div>}/>
        </Route>
        <Route path ="/cart" element={ <Cart/>}/>
       
              
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
