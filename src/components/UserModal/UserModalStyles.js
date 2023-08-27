import styled from "styled-components"


export const UserModalContainer = styled.div`
    border: 1px solid black;
    width: 200px;
    height: 300px;
    position: absolute;
    z-index: 999;
    right: 20px;
    display: ${props => props.hidden};
    flex-direction: column ;
    border-radius: 20px;
    backdrop-filter: blur(20px) ;
    &::backdrop{
        backdrop-filter: blur(20px) ;
    }
    top: 50px;
    @media(min-width : 320px){
        right: 0;
    }
    
`;


export const ButtonCloseModalContainer = styled.div`
    width: 20%;
    margin : 5px 0 0 5px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const ButtonClose = styled.button`
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
    
`;

export const UserInfoContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const UserNameContainer = styled.div`
    text-align: center;
    height: 30px;
`;

export const UserParagraph = styled.p`
    font-family: var(--font);
    font-size: 16px;
`;
export const UserNameSpan = styled.span`
    border-bottom: 1px solid black;
    font-size: 18px;
`;

export const UserItemsUl = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5px;
    height: 50%;
`;

export const UserItemLi = styled.li`
    list-style: none;
    font-size: 16px;
    font-family: var(--font);
    margin-left: 5px;
    transition: .5s;
    cursor: pointer;
    &:hover{
        color: #5D5955;
        font-size: 17px;
        margin-left: 10px;

    }
`;