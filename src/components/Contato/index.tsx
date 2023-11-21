import { useDispatch } from "react-redux";
import imgContato from "../../images/contatos.png";
import * as S from "./styles";
import ContatoClass from "../../models/Contato";
import { editar, remover } from "../../store/reducers/contatos";
import { useEffect, useState } from "react";

type Props = ContatoClass;

const Contato = ({ id, name: nameOriginal, email: emailOriginal, tell: tellOriginal }: Props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [estaEditando, setEstaEditando] = useState(false);

  useEffect(() => {
    if(nameOriginal.length > 0 && emailOriginal.length > 0 && tellOriginal.length > 0) {
      setName(nameOriginal)
      setEmail(emailOriginal)
      setTell(tellOriginal)
    }
  }, [nameOriginal, emailOriginal, tellOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setName(nameOriginal)
    setTell(tellOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <S.CardContato>
        <S.ContainerStatus>
          <img src={imgContato} alt="logo contato" />
          <ul>
            <S.Descricao value={name} disabled={!estaEditando} onChange={(e) => setName(e.target.value)} />
            <S.Descricao value={tell} disabled={!estaEditando} onChange={(e) => setTell(e.target.value)} />
            <S.Descricao value={email} disabled={!estaEditando} onChange={(e) => setEmail(e.target.value)} />
          </ul>
        </S.ContainerStatus>
        <S.ContainerButtons>
          {estaEditando ? (
            <>
              <S.BotaoSalvar onClick={() => {
                dispatch(editar({name, tell, email, id}))
                setEstaEditando(false);
              }}>SALVAR</S.BotaoSalvar>
              <S.BotaoDeletarECancelar onClick={cancelarEdicao}>
                CANCELAR
              </S.BotaoDeletarECancelar>
            </>
          ) : (
            <>
              <S.BotaoDeletarECancelar onClick={() => dispatch(remover(id))}>
                DELETAR
              </S.BotaoDeletarECancelar>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                EDITAR
              </S.BotaoEditar>
            </>
          )}
        </S.ContainerButtons>
      </S.CardContato>
    </>
  );
};

export default Contato;
