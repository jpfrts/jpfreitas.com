"use client";
import { styled } from "styled-components";

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;

  a {
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items: center;
    transition: all 0.1s ease-in-out;
  }
  a:hover {
    scale: 1.2;
  }
`;
