"use client";
import { styled } from "styled-components";
import { keyframes } from "styled-components";

export const Card1Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  padding: 10vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BgAnimacao = keyframes`
0% {background-position: 0% 50%}
50% {background-position: 100% 50%}
100% {background-position: 0% 50%}`;

export const Card1Video = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(53, 53, 53, 1) 25%,
    rgba(94, 94, 94, 1) 50%,
    rgba(45, 45, 45, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  );
  animation: ${BgAnimacao} 30s infinite ease;
  background-size: 500% 500%;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const Card1Titulo = styled.h2`
  font-family: BB Studio Headline;
  color: white;
  font-size: 62px;
  text-align: right;
`;

const piscar = keyframes`
0% {opacity:0}
50% {opacity: 1}
100% {opacity: 0}
`;

export const CardHifen = styled.span`
  opacity: 0;
  animation: ${piscar} steps(1) infinite 1s;
`;
