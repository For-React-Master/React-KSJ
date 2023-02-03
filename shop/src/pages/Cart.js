import { memo, useState } from 'react';
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {changeName, changeCount, deleteProduct,subCount} from './../store.js'

let Child = memo(function(){
    console.log('재렌더링됨')
    return <div>자식임</div>
  })



function Cart(){

    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch() //store.js로 요청보내줌
    let [count, setCount] = useState(0)

    return(
        <div>
            <Child></Child>
            <button onClick={()=>{ setCount(count + 1)}}>+</button>
            <div>{state.user}의 장바구니</div> 
            

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Modify</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(changeCount(state.cart[i].id))
                                        }}>+</button>
                                        <button onClick={()=>{
                                            dispatch(subCount(state.cart[i].id))
                                        }}>-</button>
                                    </td>
                                    <td>
                                    <button onClick={()=>{
                                            dispatch(deleteProduct(state.cart[i].id))
                                        }}>X</button>
                                    </td>
                                </tr>
                            )})
                    }        
               </tbody>
            </Table>
        </div>
    )
}

export default Cart;