/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { apiUrl } from '../api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart * Increment Quantity
    const [count, setCount] = useState(0)
    // Shopping Cart * show products
    const [cartProducts, setCartProducts] = useState([])
    // Shopping Cart * order
    const [order, setOrder] = useState([])
    const [filteredItems, setFilteredItems] = useState(null)
    
    // Product Detail * Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout side Menu  * Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    // Product Detail * Show PRoduct
    const [productToShow, setProductToShow] = useState({})

    // Get products
    const [items, setItems] = useState(null)

    //Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    //Get product by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch(`${apiUrl}/products`)
          .then(response => response.json())
          .then(data => {
            setItems(data)
          })
      }, [])


    const filterItemsMultiple = (items, searchByTitle, searchByCategory) => {
        let newFilter = items
        
        if (searchByTitle) {
            newFilter = newFilter?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (searchByCategory) {
            newFilter = newFilter?.filter(item => item.category.id === searchByCategory )
        }
        return newFilter
    }

    useEffect(() => {
        setFilteredItems(filterItemsMultiple(items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])
    
    return(
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
