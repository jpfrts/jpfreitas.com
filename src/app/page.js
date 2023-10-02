import { SocialProfileJsonLd } from "next-seo";
import { Layout } from "./components/layout";

export default function Home() {
  return (
    <>
      <Layout />;
      <SocialProfileJsonLd
        useAppDir={true}
        type="Organization"
        name="JP Freitas"
        url="https://jpfreitas.com"
        sameAs={[
          "https://twitch.tv/jpfreitas",
          "https://instagram.com/jpfreitas_",
          "https://youtube.com/@jp.freitas",
          "https://tiktok.com/@jpfreitas_",
          "https://twitter.com/@jpfreitas_",
        ]}
      />
    </>
  );
}
