import styled from 'styled-components'
/* Start Header Section */
export const HeaderColor = styled.div`
        color: #212b3e;
        background-color: #68aba3;
        padding: 20px;
        font-family: sans-serif;
        text-align: center;
`;
export const Title = styled.h1`
    position: relative;
    width: fit-content;
    letter-spacing: 7px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #dede;
`;
export const Description = styled.p`
    color: #212b3e;
    letter-spacing: 3px;

`;
/* End Header Section */

/* Start TimeLine Section */
export const TimeLineBg = styled.div`
    background-color: #212b3e;
    padding: 10px;
    div:nth-child(odd) {
        flex-direction: row-reverse;
        span {
            left: 50px
        }
        span:after {
        position: absolute;
        content: '';
        width: 50px;
        height: 8px;
        top: 40%;
        left: -50px;
        }
    }
    div:first-child{
        span:before {
            position: absolute;
            content: '';
            width: 25px;
            height: 25px;
            border-radius: 50%;
            bottom: 115px;
            left: -59.7px;
            background-color: #69aba3;
            }
    }
        
    @media (max-width: 660px) {
        div:nth-child(odd) {
        flex-direction: row;
    }
        div:nth-child(even){
            span {
                left: 50px
            }
            span:after {
            position: absolute;
            content: '';
            width: 50px;
            height: 8px;
            top: 40%;
            left: -50px;
            }
        }
    }
`;
export const MainList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
`;
export const Contents = styled.div`
    text-align: center;
    padding: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    min-width: 350px;
    h1 {
        border-bottom: 2px solid red;
        width: fit-content;
        margin: 20px auto;
        padding: 5px 15px;
        color: #68aba3
    }
    p {
        width: 250px;
        padding: 0px;
        line-height: 1.7;
        font-size: 18px;
        color: #fff;
        margin: auto;
    }
    @media (max-width: 850px) {
        max-width: 300px;
    }
`;
export const Line = styled.div`
    position: absolute;
    content: "";
    height: 100%;
    width: 5px;
    right: 50%;
    background-color: #68aba3;
    span {
        content: '';
        height: 75px;
        width: 75px;
        line-height: 75px;
        text-align: center;
        background-color: #fff;
        position: absolute;
        border-radius: 10px;
        left: -120px;
        top: 30%;
        font-weight: bold;
        font-family: Tahoma;
        font-size: 22px;
        color: #212b3e;
    }
    span:after {
        position: absolute;
        content: '';
        width: 50px;
        height: 8px;
        background-color: #68aba3;
        top: 40%;
        left: 75px;
    }
    span:nth-child(odd){
        right: 50%;
        display: block;

    }
`;
/* End TimeLine Section */
