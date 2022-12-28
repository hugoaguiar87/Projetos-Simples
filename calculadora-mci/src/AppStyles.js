import styled from "styled-components"

export const Logo = styled.div`
    width: 60px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 20px;
    border-radius: 5px;
    background-color: #6BC0E8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContainer = styled.div`
    max-width: 900px;
    margin: 40px auto;
    display: flex;
    align-items: center;

    em {
        opacity: 0.5;
        margin-left: 10px;
    }
`

export const Container = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
`

export const LeftSide = styled.div`
    flex: 1;
    margin-right: 40px;

    h1{
        margin: 0;
        font-size: 40px;
        color: #3A4B5C;
    }

    p{
        font-size: 16px;
        margin-bottom: 40px;
        color: #6A7D8B;
    }

    input {
        width: 100%;
        border: 0;
        border-bottom: 2px solid rgba(150, 163, 171, 0.5);
        padding: 10px 2px;
        margin-bottom: 20px;
        outline: 0;
        font-size: 14px;

        &:disabled{
            opacity: 0.5;
        }
    }

    button{
        background-color: #227C9D;
        color: #FFF;
        font-size: 15px;
        border: 0;
        border-radius: 10px;
        padding: 15px 0;
        width: 100%;
        cursor: pointer;
        margin-top: 40px;
        transition: all ease 0.3s;

        &:hover{
            opacity: 0.8;
        }

        &:disabled{
            opacity: 0.5;
        }
    }
`

export const RightSide = styled.div`
    flex: 1;
    margin-left: 40px;
    display: flex;

    .grid{
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px
    }

    .bigItem{
        flex: 1;
        display: flex;
    }

    .rightArrow{
        position: absolute;
        background-color: #227C9D;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: -35px;
        margin-top: 145px;
        transition: all ease 0.3s;

        &:hover{
            opacity: 0.8;
        }
    }
`