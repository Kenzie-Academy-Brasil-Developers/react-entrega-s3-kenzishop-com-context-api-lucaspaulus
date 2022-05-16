import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../providers/products';

import Card from '../Card';
import * as S from "./style.js"

function Main() {
 
    const {products} = useContext(ProductsContext)
 
    return (
        <S.Main>
            {  
                products.map((item)=>(
                    <Card key={item.id} item={item} addProductToCart={item}/>
                ))
            }
        </S.Main>
    ) 
}

export default Main;
