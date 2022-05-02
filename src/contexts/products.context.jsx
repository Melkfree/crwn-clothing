import { createContext, useState, useEffect } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return(
        <ProductsContext.Provider value={value} >
            {children}
        </ProductsContext.Provider>
    )
}

// export const ProductContext = createContext({
//     currentProduct: null,
//     setCurrentProduct: () => null,
// });

// export const ProductProvider = ({ children }) => {
//     const [currentProduct, setCurrentProduct] = useState(null);
//     const value = { currentProduct, setCurrentProduct};


//     useEffect(() => {
//         const unsubsribe = onAuthStateChangedListener((user) => {
//             if (user){
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         });
//         return unsubsribe  
//     }, [])

//     return <ProductContext.Provider value={value} >
//         {children}
//     </ProductContext.Provider>
// }