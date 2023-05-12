import Link from "next/link";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { RedesContainer, RedesLink } from "./style";

export const RedesSociais = () => {
  return (
    <RedesContainer>
      <RedesLink
        href="https://www.instagram.com/jpfreitas_"
        title="Instagram - jp freitas"
      >
        <FaInstagram />
      </RedesLink>
      <RedesLink
        href="https://twitch.tv/jpfreitas_"
        title="Twitch - jp freitas"
      >
        <FaTwitch />
      </RedesLink>
      <RedesLink
        href="https://youtube.com/@jp.freitas"
        title="YouTube - jp freitas"
      >
        <FaYoutube />
      </RedesLink>
    </RedesContainer>
  );
};
