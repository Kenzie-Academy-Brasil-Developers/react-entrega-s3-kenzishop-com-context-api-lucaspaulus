// fazer os imports 
import { createContext, useState } from "react";

//criar o context
export const ProductsContext = createContext([])

//criar o provider
export const ProductsProvider = ({children})=> {
    const [products, setProducts] = useState([
        {id: 1, name:"Aglaonema", price: 60.76, img: "/plantProducts/aglaonema.png"},
        {id: 2, name:"Monstera", price: 46.80, img: "/plantProducts/monstera.png" },
        {id: 3, name:"Peace lily", price: 39.00, img: "/plantProducts/peace-lily.png" },
        {id: 4, name:"Pothos", price: 50.57, img: "/plantProducts/pothos.png" },
        {id: 5, name:"Rubber plant", price: 50.00, img: "/plantProducts/rubber-plant.png" },
        {id: 6, name:"Snake plant", price: 91.00, img: "/plantProducts/snake-plant.png" }

    ])

    return (
        <ProductsContext.Provider
            value={{products}}
        >
            {children}
        </ProductsContext.Provider>
    )
}


