import { useDispatch, useSelector } from "react-redux";
import { Botao, Campo } from "../../styles";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { cadastrar } from "../../store/reducers/contatos";
import { FormEvent, useState } from "react";

const Formulario = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  const [name, setName] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')


  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault();

    dispatch(cadastrar({
      name,
      email,
      tell
    }))
  }

  const limparCampos = () => {
    setTimeout(() => {
      setName('')
      setTell('')
      setEmail('')
    }, 100)
  }

  return (
    <>
      <S.Header>
        <h1>Agenda de contatos</h1>
        <h2>{itens.length} contatos na agenda</h2>
      </S.Header>
      <S.Form onSubmit={cadastrarContato}>
        <Campo value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Nome" required />
        <Campo value={tell} onChange={(event) => setTell(event.target.value)} type="text" placeholder="Telefone" required />
        <Campo value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="E-mail" required />
          <Botao onClick={limparCampos} type="submit">ADICIONAR</Botao>
      </S.Form>
    </>
  );
};

export default Formulario;
