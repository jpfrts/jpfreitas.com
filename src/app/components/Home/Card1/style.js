"use client";
import { styled } from "styled-components";

export const Card1Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Card1Video = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
  background-color: #000;
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
