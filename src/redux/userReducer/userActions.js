import { CLOSE_USER_MODAL, DELETE_PROD_MODAL, HIDDEN_MENU, OPEN_USER_MODAL, USER_LOGIN, USER_LOGOUT } from "./userActionTypes";

export const userLogin = (userName , rol , token ) => ({
    type : USER_LOGIN ,
    payload : {
    userName :userName ,
     rol , 
     token ,
    }

})

export const userLogout = () => ({
    type : USER_LOGOUT,
    payload : null
})

export const openUserModal  = () => ({
    type : OPEN_USER_MODAL
})
export const closeUserModal = () => ({
    type : CLOSE_USER_MODAL
})

export const deleteProdModal = (id) => ({
    type : DELETE_PROD_MODAL,
    payload : id
})

export const hiddenMenu = () => ({
    type : HIDDEN_MENU
})