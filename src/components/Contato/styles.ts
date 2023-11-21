import styled from "styled-components";
import { Botao } from "../../styles";
import variables from "../../styles/variables";

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  background-color: rgb(245, 246, 250);
  box-shadow: rgba(0, 0, 0, 0.35) 1px 2px 3px;
  border-radius: 6px;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const BotaoDeletarECancelar = styled(Botao)`
  background-color: ${variables.vermelho};
`;

export const BotaoEditar = styled(Botao)`
  background-color: ${variables.amarelo};
`;

export const BotaoSalvar = styled(Botao)`
  background-color: green;
`;

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
`;
