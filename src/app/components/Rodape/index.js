import { RedesSociais } from "../RedesSociais";
import { RodapeContainer, RodapeCopyright } from "./style";

export const Rodape = () => {
  return (
    <RodapeContainer>
      <RodapeCopyright>© 2023</RodapeCopyright>
      <RedesSociais />
    </RodapeContainer>
  );
};
