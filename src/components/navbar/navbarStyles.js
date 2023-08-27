import styled  from "styled-components"
import {CiUser} from "react-icons/ci"
import {GiHamburgerMenu} from "react-icons/gi"
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    width: 95%;
    margin: 0 auto;
    @media(min-width: 375px){
       
    }
    @media(min-width: 425px){
        width: 100%;
      
    }
    @media(min-width: 768px){
        width: 100%;
       
    }
    @media(min-width: 1024px){
        width: 100%;
      
    }
   
    @media(min-width: 1440px){
        width: 95%;
    }
   

`;

export const LogoContainer = styled.div`
    height: 100px;
    width: 100px;
    margin :  0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media(min-width : 375px){
        margin :  0 0 0 20px;
    }
  

`;
export const LogoNavbar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    @media(min-width:  1440px){
        width: 150px;
        height: 150px;
        margin: 30px  0 0 0;
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 40%;
    height: 500px;
    @media screen and (min-width: 320px) {
        width: 60%;
       
    }
    @media(min-width:375px){
        position: absolute;
        right: 0;
        height: 400px;
        margin-top: 300px;
        flex-direction: column;
        width:300px;
    }
    @media(min-width : 1024px){
        display: flex;
        flex-direction: row;
        justify-content: right;
        width: 60%;
        height: 150px;
        margin-top: 0;
    }
   
   
`;

export const ItemUl = styled.ul`
    display: flex;
    height: 80px;
    width:80% ;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    backdrop-filter: blur(3px);
    @media(min-width : 320px){
        flex-direction: column;
        height: 200px;
        backdrop-filter: blur(10px);
        margin-top: 100px;
        width:  100%;
        z-index: 150;
        display: ${props => props.hidden ? "none" : "flex"};
    }
    @media(min-width : 375px){
        flex-direction: column;
        height: 300px;
        backdrop-filter: blur(10px);
        margin-top: 30px;
        z-index: 150;
        display: ${props => props.hidden ? "none" : "flex"};
    }
    @media(min-width: 1024px ){
        flex-direction: row;
        display: flex;
        width: 500px;
        height: 150px;
        margin-top: 0;
        backdrop-filter: blur(10px);
    }
    @media(min-width: 1440px){
        width: 700px;
    }
    
    
`;

export const ItemsLINavbar = styled.li`
    list-style: none;
    font-size: 20px;
    transition: ease .5s;
    cursor: pointer;
    &:hover{
        color: darkgray;
    }
    @media(min-width: 375px){
        font-size: 20px;
    }
    @media(min-width: 1440px){
        font-size: 25px;
    }
    
   
`;

export const IconUserContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
   
`;

export const UserIcon = styled(CiUser)`
        font-size: 30px;
        cursor: pointer;
        @media(min-width: 2560px){
        font-size: 35px;
    }
`;

export const IconBurgerContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media(min-width : 375px){
        border: 2px dashed red;
        margin-left: 250px;
       
    }
    @media(min-width:1024px){
        margin: 0;
        display: none;

    }
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
    color: black;
    font-size: 22px;
    transition: .4s ;
    cursor: pointer;
    &:hover{
        color: gray;
    }
    @media(min-width : 375px){
        display: flex;
       
    }
    @media(min-width : 400px){
        display: flex;
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;