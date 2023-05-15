import { SocialProfileJsonLd } from "next-seo";
import { Layout } from "./components/layout";
import { useContext } from "react";

export default function Home() {
  return (
    <>
      <Layout />
      <SocialProfileJsonLd
        useAppDir={true}
        type="Person"
        name="jp freitas"
        url="https://jpfreitas.com"
        sameAs={[
          "https://twitch.tv/jpfreitas_",
          "https://instagram.com/jpfreitas_",
          "https://youtube.com/@jp.freitas",
          "https://tiktok.com/@jpfreitas_",
          "https://twitter.com/@jpfreitas_",
        ]}
      />
    </>
  );
}
