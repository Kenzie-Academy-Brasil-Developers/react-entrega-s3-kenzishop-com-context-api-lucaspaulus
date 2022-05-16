import GlobalStyle from "./style/global.js"
import Routes from "./Routes/index.js";
import Header from "./components/Header"

import { ProductsProvider } from "./providers/products.js";
import { CartProvider } from "./providers/cart.js";


function App() {
    return (
        <ProductsProvider>
            <CartProvider>
                <GlobalStyle/>
                <Header/>
                <Routes/>
            </CartProvider>
            
        </ProductsProvider>
    )
}

export default App;
