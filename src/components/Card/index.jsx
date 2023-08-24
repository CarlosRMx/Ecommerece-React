import React from 'react'
import { PlusCircleIcon,CheckCircleIcon} from '@heroicons/react/24/solid'
import { EcommereceContex } from '../../context';

function Card(data) {

    const {id,title,price,image,category} = data;

    const {
        showProduct,
        addProductToCart,
        shoppingCart,
    }= React.useContext(EcommereceContex);

    const renderIcon = (productToAddId)=>{

        const isProductInCart = shoppingCart.filter(product => product.id === productToAddId).length > 0

        if(isProductInCart){
            return(
                <CheckCircleIcon 
                className='absolute w-8 h-8 top-0 right-0 m-2 text-yellow-200'
                />
            )
        }else{
            return(
                <PlusCircleIcon 
                className='absolute w-8 h-8 top-0 right-0 m-2 text-white'
                onClick={(event)=> addProductToCart(event,data)}
                />
            )
        }
    }
    
  return (
    <div 
        className='w-56 h-60 bg-white rounded-lg cursor-pointer'
        onClick={() => showProduct(data)}
    >
        <figure className='relative w-full h-4/5 mb-2'>
            {renderIcon(id)}
            <img 
                className='w-full h-full rounded-lg object-cover' 
                src={image}
                alt={title} 
            >
            </img>
            <span 
                className='absolute bottom-0 left-0 m-2 px-2 
                py-0.5 text-xs rounded-lg bg-white/60'
            >{category}
            </span>

        </figure>
        <div className='flex justify-between items-center w-full'>
            <p className='text-sm font-light'>{title}</p>
            <span className='text-lg font-bold'>${price}</span>
        </div>
    </div>
  )
}

export {Card}