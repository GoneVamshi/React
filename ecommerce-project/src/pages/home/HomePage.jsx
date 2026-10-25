import axios from 'axios'
import {useEffect,useState} from 'react'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'



import './HomePage.css'



export function HomePage({cart}) {
    const [products,setproducts] = useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
        .then((response)=>{
            setproducts(response.data)
        })

        
    },[])
    
    return (
        <>
            <title>Ecommerce project</title>

            <Header cart ={cart} />


            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>

        </>
    )
}