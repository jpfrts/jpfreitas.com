import Link from "next/link";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { RedesContainer } from "./style";

export const RedesSociais = () => {
  return (
    <RedesContainer>
      <Link
        href="https://www.instagram.com/jpfreitas_"
        title="Instagram - jp freitas"
        target="_blank"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://twitch.tv/jpfreitas_"
        title="Twitch - jp freitas"
        target="_blank"
      >
        <FaTwitch />
      </Link>
      <Link
        href="https://youtube.com/@jp.freitas"
        title="YouTube - jp freitas"
        target="_blank"
      >
        <FaYoutube />
      </Link>
    </RedesContainer>
  );
};
