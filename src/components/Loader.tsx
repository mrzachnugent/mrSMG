import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: 40 },
  visible: {
    rotate: 0,
    transition: { duration: 1.2 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Loader: FC = () => {
  return (
    <Backround>
      <Wrapper>
        <SVG
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          width="200"
          height="200"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <motion.path
              d="M96.1601 3.071C62.6591 1.957 35.2191 14.314 35.2191 14.314L35.1991 77.023C31.7881 75.669 27.6401 75.348 23.4271 76.372C14.3441 78.579 8.39608 86.192 10.1421 93.379C11.8881 100.566 20.6661 104.604 29.7481 102.398C38.3121 100.317 44.0861 93.429 43.2551 86.626V39.771C43.2551 39.771 62.6591 32.987 87.8281 31.286V66.135C84.4541 64.843 80.3851 64.55 76.2491 65.555C67.1661 67.761 61.2181 75.374 62.9641 82.562C64.7091 89.749 73.4871 93.786 82.5701 91.58C90.5011 89.653 96.0411 83.603 96.1571 77.316L96.1601 77.32V3.071V3.071Z"
              fill="url(#paint0_linear)"
              variants={pathVariants}
            />
          </g>
          <g clipPath="url(#clip1)">
            <motion.path
              d="M93.1601 0.0709984C59.6591 -1.043 32.2191 11.314 32.2191 11.314L32.1991 74.023C28.7881 72.669 24.6401 72.348 20.4271 73.372C11.3441 75.579 5.39608 83.192 7.14208 90.379C8.88808 97.566 17.6661 101.604 26.7481 99.398C35.3121 97.317 41.0861 90.429 40.2551 83.626V36.771C40.2551 36.771 59.6591 29.987 84.8281 28.286V63.135C81.4541 61.843 77.3851 61.55 73.2491 62.555C64.1661 64.761 58.2181 72.374 59.9641 79.562C61.7091 86.749 70.4871 90.786 79.5701 88.58C87.5011 86.653 93.0411 80.603 93.1571 74.316L93.1601 74.32V0.0709984V0.0709984Z"
              fill="url(#paint1_linear)"
              variants={pathVariants}
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="52.999"
              y1="2.99996"
              x2="52.999"
              y2="103.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#051732" />
              <stop offset="1" stopColor="#0D3063" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="49.999"
              y1="-3.8147e-05"
              x2="49.999"
              y2="100.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AB0000" />
              <stop offset="1" stopColor="#440000" />
            </linearGradient>
            <clipPath id="clip0">
              <rect
                width="100"
                height="100"
                fill="white"
                transform="translate(3 3)"
              />
            </clipPath>
            <clipPath id="clip1">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </SVG>
      </Wrapper>
    </Backround>
  );
};

const Backround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  background: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SVG = styled(motion.svg)`
  animation: dropFilter 2.2s forwards;

  @keyframes dropFilter {
    0% {
      filter: none;
    }
    80% {
      filter: none;
    }
    100% {
      filter: drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.15));
    }
  } ;
`;
