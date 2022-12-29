import styled from "styled-components";

export const Main = styled.div`
    flex: 1;
    color: #FFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title{
        font-size: 23px;
        font-weight: bold;
        margin-top: 5px;
    }

    .yourImc{
        font-size: 17px;
        margin: 10px 0 50px 0;
    }

    .info{
        font-size: 12px;
        margin-top: 14px;
    }
`