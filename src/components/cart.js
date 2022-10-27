import React,{useState,useEffect} from 'react'
 import { useParams } from 'react-router'
 import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';



function Cart() {
     const state= useSelector((state)=>state.addCart)

     const {id} = useParams();
     const [product,setProduct] = useState([]);
     const [loading,setLoading] = useState(false);

    const dispatch= useDispatch();
    const handleButton=(product)=>{
        dispatch(handleButton(product));
    }
   
    useEffect(()=>{
        const getProduct= async ()=>{
            setLoading(true);
            const response= await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    },[id]);
    const Loading =()=>{
        return(<>
       Loading.....
        </>)
    }
     const ShowProduct=()=>{
        return(<>
        <div className='col-md-4'>
                <img src={product.image} alt={product.title} height='200px' width='180px' />
            </div>
            <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>{product.qty} X ${product.price}=${product.qty * product.price}</p>
                <button className='btn btn-outline-dark mx-4' onClick={()=>handleButton(state.product)}><i className='fa fa-minus'></i></button>
                <button className='btn btn-outline-dark' onClick={()=>handleButton(state.product)}><i className='fa fa-plus'></i></button>
            </div>
        </>)
    }
 
  return (
    <div className='container'>
        <div className='row'>
         {loading ? <Loading /> : <ShowProduct />} 
     
        </div>
      
    </div>
  )
}

export default Cart
