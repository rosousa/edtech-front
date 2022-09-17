import Wrapper from "../../styles/Wrapper";
import { useState } from "react";
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

function SignUp() {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    Request.signUp(credentials)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/sign-in");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert("Usuário já cadastrado!");
          return;
        }
        alert("Preencha o formulário corretamente!");
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
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                passwordConfirm: e.target.value,
              })
            }
            required
          />
          <Button>Cadastrar</Button>
        </Form>
        <Option onClick={() => navigate("/sign-in")}>
          Já tem uma conta? Entre agora!
        </Option>
      </Content>
    </Wrapper>
  );
}

export default SignUp;
