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

export const Card1Video = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
  z-index: -1;
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
