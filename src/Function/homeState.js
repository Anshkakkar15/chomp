export const menuState = {
    burger: true,
    sides: false,
    drinks:false
}
export const orderState = {
    fullMenu: true,
    burger: false,
    sides: false,
    drinks:false
}

export const faqState = {
    ourFood: true,
    ourDelivery: false,
    ourCompany:false,
}

export const toggleState = (state,setState,name) => {
    Object.keys(state).forEach((key) => {
        state[key] = false;
    })
   return setState({...state,[name]:true})
}