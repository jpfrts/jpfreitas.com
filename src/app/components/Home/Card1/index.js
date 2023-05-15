import { Card1Container, Card1Titulo, Card1Video, CardHifen } from "./style";

export const Card1 = () => {
  return (
    <Card1Container>
      <Card1Titulo>
        lives<CardHifen>_</CardHifen>
      </Card1Titulo>
      <Card1Video src="/videos/placeholder.mp4" />
    </Card1Container>
  );
};
