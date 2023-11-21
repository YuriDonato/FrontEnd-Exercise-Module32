import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Contato from "../../components/Contato";
import { MainContainer } from "./styles";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  return (
    <MainContainer>
      <ul>
        {itens.map((c) => (
          <li key={c.name}>
            <Contato id={c.id} name={c.name} email={c.email} tell={c.tell} />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default ListaDeContatos;
