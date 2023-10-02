import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RedesContainer } from "./style";

export const RedesSociais = () => {
  return (
    <RedesContainer>
      <Link
        href="https://twitch.tv/jpfreitas"
        title="Twitch - JP Freitas"
        target="_blank"
      >
        <FaTwitch />
      </Link>
      <Link
        href="https://www.instagram.com/jpfreitas_"
        title="Instagram - JP Freitas"
        target="_blank"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://youtube.com/@jp.freitas"
        title="YouTube - JP Freitas"
        target="_blank"
      >
        <FaYoutube />
      </Link>
      <Link
        href="https://tiktok.com/@jpfreitas_"
        title="TikTok - JP Freitas"
        target="_blank"
      >
        <FaTiktok />
      </Link>
      <Link
        href="https://twitter.com/@jpfreitas_"
        title="Twitter - JP Freitas"
        target="_blank"
      >
        <FaTwitter />
      </Link>
    </RedesContainer>
  );
};
