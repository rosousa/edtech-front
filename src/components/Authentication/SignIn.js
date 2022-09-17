import Wrapper from "../../styles/Wrapper";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Content,
  Title,
  Form,
  Input,
  Button,
  Option,
} from "../../styles/AuthenticationStyle";
import * as Request from "../../services/requests";
import Token from "../../contexts/UserToken";

function SignIn() {
  const [credentials, setCredentials] = useState({});

  const { setToken } = useContext(Token);

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    Request.signIn(credentials)
      .then((res) => {
        const token = res.data.token;
        setToken(token);
      })
      .catch(() => {
        alert("Usuário e/ou senha inválidos");
      });
  }

  return (
    <Wrapper>
      <Content>
        <Title>edTech</Title>
        <Form onSubmit={handleForm}>
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
          <Button>Entrar</Button>
        </Form>
        <Option onClick={() => navigate("/sign-up")}>
          Primeira vez? Cadastre-se!
        </Option>
      </Content>
    </Wrapper>
  );
}

export default SignIn;
