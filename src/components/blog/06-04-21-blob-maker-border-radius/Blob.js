import React, { useState } from 'react'
import styled from "styled-components"

export const Blob = () => {
    const [radius, setRadius] = useState({ tl: 60, tr: 70, br: 90, bl: 40 });
    const [rotate, setRotate] = useState(50);
    const [scale, setScale] = useState(0.8);
    const [height, setHeight] = useState(20);
    const [width, setWidth] = useState(24);
    const [currentBackground, setCurrentBackground] = useState('linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)');

    function randomRadius() {
        setRotate(Math.ceil(Math.random() * 100) - 50)
        setScale(Math.max(Math.random(), 0.7))
        setHeight(Math.max(Math.ceil((Math.random() * 100) - 75), 20))
        setWidth(Math.max(Math.ceil((Math.random() * 100) - 70), 20))
        console.log(scale)
        const tl = Math.max(Math.ceil(Math.random() * 100), 30);
        const tr = Math.max(Math.ceil(Math.random() * 100), 30);
        const br = Math.max(Math.ceil(Math.random() * 100), 30);
        const bl = Math.max(Math.ceil(Math.random() * 100), 30);
        setRadius({ tl, tr, br, bl })
    }

    const gradient = {
        grad1: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);',
        grad2: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);',
        grad3: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%);',
        grad4: '#EFA00B;',
        grad5: '#0075C4;',
        grad6: '#D65108;'
    }


    return (
        <>
            <Wrapper>
                <div className='container'>
                    <button className='refresh-button' onClick={randomRadius}><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1995 5.82492C10.1995 5.96946 10.2569 6.10809 10.3592 6.2103C10.4614 6.3125 10.6 6.36992 10.7445 6.36992H16.2145V0.904922C16.2145 0.759716 16.1568 0.620457 16.0542 0.517781C15.9515 0.415105 15.8122 0.357422 15.667 0.357422C15.5218 0.357422 15.3826 0.415105 15.2799 0.517781C15.1772 0.620457 15.1195 0.759716 15.1195 0.904922V4.47492C14.0943 2.97353 12.5994 1.85519 10.8696 1.29549C9.13985 0.7358 7.27318 0.76646 5.56274 1.38266C3.85229 1.99886 2.39494 3.1657 1.41953 4.69995C0.444125 6.23419 0.00591021 8.04895 0.1737 9.85925C0.341489 11.6696 1.10578 13.3729 2.34655 14.7017C3.58733 16.0305 5.23431 16.9096 7.02887 17.201C8.82344 17.4923 10.6639 17.1794 12.2614 16.3113C13.8588 15.4432 15.1227 14.0692 15.8545 12.4049C15.9087 12.27 15.9083 12.1192 15.8533 11.9846C15.7983 11.8499 15.6931 11.742 15.56 11.6835C15.4268 11.625 15.2761 11.6207 15.1398 11.6713C15.0035 11.722 14.8922 11.8237 14.8295 11.9549C14.1944 13.4015 13.0943 14.5944 11.7039 15.3445C10.3134 16.0945 8.71233 16.3587 7.15465 16.0951C5.59697 15.8315 4.17195 15.0551 3.10577 13.8893C2.03959 12.7235 1.39333 11.235 1.26954 9.66001C1.14576 8.08503 1.55156 6.51383 2.42252 5.19577C3.29349 3.8777 4.57973 2.88829 6.0771 2.38456C7.57447 1.88083 9.1972 1.89164 10.6877 2.41528C12.1783 2.93891 13.4512 3.94537 14.3045 5.27492H10.7495C10.6771 5.27425 10.6053 5.28803 10.5383 5.31543C10.4712 5.34283 10.4103 5.38332 10.3591 5.43453C10.3079 5.48573 10.2674 5.54663 10.24 5.61366C10.2126 5.68069 10.1989 5.75251 10.1995 5.82492V5.82492Z" fill="black" />
                    </svg>
                    </button>
                    <Gradients>
                        <Grad1 onClick={() => { setCurrentBackground(gradient.grad1) }} gradient={gradient} />
                        <Grad2 onClick={() => { setCurrentBackground(gradient.grad2) }} gradient={gradient} />
                        <Grad3 onClick={() => { setCurrentBackground(gradient.grad3) }} gradient={gradient} />
                        <Grad4 onClick={() => { setCurrentBackground(gradient.grad4) }} gradient={gradient} />
                        <Grad5 onClick={() => { setCurrentBackground(gradient.grad5) }} gradient={gradient} />
                        <Grad6 onClick={() => { setCurrentBackground(gradient.grad6) }} gradient={gradient} />
                    </Gradients>
                </div>
                <BlobElement height={height} width={width} currentBackground={currentBackground} scale={scale} radius={radius} rotate={rotate} />

            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`
    filter: drop-shadow(${props => props.theme.shadows.shadow1});
    border-radius: 1rem;
    position: relative;
    padding: 4rem 0;
    margin: 4rem 0;
    background: ${props => props.theme.light.bg.main};
    

    .container {
        position: absolute;
        top: 10px;
        left: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    

    .refresh-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        border: 2px solid #627D98;
        outline: none;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        
        
        svg {
            transition: 0.05s ease-in;

            path {
                fill: ${props => props.theme.light.text.neutral};
            }
        }
    
    &:hover svg {
      transform: scale(1.1)
    }
    
    &:active svg {
      transform: scale(1.1) rotate(60deg);
    }

    &:active svg path {
        fill: ${props => props.theme.light.text.main};
    }

    }
`

const Gradients = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 8rem;
`

const Grad = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0.3rem;
    border: none;
    outline: none;

    &:active, &:focus {
        border: 4px solid ${props => props.theme.text.neutral};
    }
`

const Grad1 = styled(Grad)`
    background: ${props => props.gradient.grad1}
`
const Grad2 = styled(Grad)`
    background: ${props => props.gradient.grad2}
`
const Grad3 = styled(Grad)`
    background: ${props => props.gradient.grad3}
`
const Grad4 = styled(Grad)`
    background: ${props => props.gradient.grad4}
`
const Grad5 = styled(Grad)`
    background: ${props => props.gradient.grad5}
`
const Grad6 = styled(Grad)`
    background: ${props => props.gradient.grad6}
`

const BlobElement = styled.div`
    width: ${props => `${props.width}rem`};
    height: ${props => `${props.height}rem`};
    transform: ${({ scale, rotate }) => `scale(${scale}) rotate(${rotate}deg) translate(${rotate}px)`};
    background: ${props => props.currentBackground};
    border-radius: ${({ radius }) => radius ? `${radius.tl}% ${radius.tr}% ${radius.br}% ${radius.bl}%` : '20%'};
    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    margin: 0 auto;
    filter: drop-shadow(${props => props.theme.shadows.shadow1});


        @media ${props => props.theme.breakpoints.mobile}{
            margin: 4rem auto;
        }
`