import React, { createContext ,useState } from 'react'

const dataContent = createContext({});

export const Store = ({children}) => {
  const [cartData, setCartData] = useState([])
  return (
    <dataContent.Provider value={{cartData , setCartData}}>
      {children}
    </dataContent.Provider>
  )
}

export default dataContent;

