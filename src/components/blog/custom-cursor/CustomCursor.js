import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import first from './assets/1.png'
import second from './assets/2.png'
import third from './assets/3.png'

export const CustomCursor = () => {
  const [file, setFile] = useState(null)
  const hiddenFileInput = React.useRef(null)

  const handleChange = e => {
    const selected = e.target.files[0]
    hiddenFileInput.current.click()
    let reader = new FileReader()
    reader.onload = function () {
      setFile(reader.result)
    }
    selected && reader.readAsDataURL(selected)
  }

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const handleRemoveClick = () => {
    setFile(null)
  }

  console.log(file)
  return (
    <Container file={file}>
      <IconContainer>
        <Icon onClick={() => { setFile(first) }} src={first} />
        <Icon onClick={() => { setFile(second) }} src={second} />
        <Icon onClick={() => { setFile(third) }} src={third} />
        <div className='container'>
          <input
            type="file"
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleChange}
          />
          {!file && (
            <SVG
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClick}
            >
              <circle cx="23" cy="23" r="23" fill="#C4C4C4" />
              <line
                x1="23.23"
                y1="12.88"
                x2="23.23"
                y2="33.12"
                stroke="black"
                stroke-width="2.3"
              />
              <line
                x1="33.12"
                y1="23.69"
                x2="12.88"
                y2="23.69"
                stroke="black"
                stroke-width="2.3"
              />
            </SVG>
          )}
          {file && (
            <SVG
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleRemoveClick}
            >
              <circle cx="23" cy="23" r="23" fill="#C4C4C4" />
              <line
                x1="30.3186"
                y1="16.0067"
                x2="16.0067"
                y2="30.3186"
                stroke="black"
                stroke-width="2.3"
              />
              <line
                x1="29.668"
                y1="30.6438"
                x2="15.3562"
                y2="16.332"
                stroke="black"
                stroke-width="2.3"
              />
            </SVG>
          )}
        </div>
      </IconContainer>
      <p className='instruction-text-small'>Please click on the cursor images above to use that as a custom cursor. If you want to use your own image, make sure it is smaller than <em>50x50 resolution.</em></p>
    </Container>
  )
}

const Container = styled.main`
position: relative;
  height: 400px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 2rem auto;
  border: 2px solid ${props => props.theme.text.main};
  border-radius: 2rem;
  cursor: url(${props => props.file && props.file}), auto;
`

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .container {
    margin: 0.8rem;
  }
`

const Icon = styled.img`
  width: 30px;
  margin: 0.8rem;

  &:hover{
    transform: scale(1.05);
  }
  &:active{
    transform: scale(0.95);
  }
`

const SVG = styled(motion.svg).attrs({
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.9,
  },
})`
  cursor: pointer;
  margin: auto;
  circle {
    fill: ${props => props.theme.text.main};
  }

  line {
    stroke: ${props => props.theme.bg.main};
  }
`
