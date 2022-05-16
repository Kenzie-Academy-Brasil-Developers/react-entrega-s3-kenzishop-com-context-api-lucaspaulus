import * as S from "./style.js"
import formatValue from '../../utils/formatValue.js';

import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";

function Card({item}){
    const {id,img, name, price} = item 

    const {products} = useContext(ProductsContext)
    const {cart, addToCart, removeFromCart} = useContext(CartContext)

    function add(id){
        const item = products.find((productItem)=> productItem.id === id)
        
        const isProductAdd = cart.some((product)=> product.id === item.id)
 
        if(!isProductAdd){
            addToCart(item)
        }
      
    }
    return (
        <S.Container>
            <S.ImgContainer>
                <img src={img}/>
            </S.ImgContainer>

            <S.InfoProducts>
                <h3>{name}</h3>
                <p><span>por </span>{formatValue(price)}</p>
            </S.InfoProducts>

            <button onClick={()=>add(id)}>Adcionar ao Carrinho</button>
            
        </S.Container>
               
    )
}

export default Card
