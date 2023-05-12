import Link from "next/link";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { RedesContainer } from "./style";

export const RedesSociais = () => {
  return (
    <RedesContainer>
      <Link
        href="https://www.instagram.com/jpfreitas_"
        title="Instagram - jp freitas"
      >
        <FaInstagram />
      </Link>
      <Link href="https://twitch.tv/jpfreitas_" title="Twitch - jp freitas">
        <FaTwitch />
      </Link>
      <Link href="https://youtube.com/@jp.freitas" title="YouTube - jp freitas">
        <FaYoutube />
      </Link>
    </RedesContainer>
  );
};
