import Wrapper from "../../styles/Wrapper";
import {
  Content,
  Title,
  Form,
  Input,
  Button,
} from "../../styles/AuthenticationStyle";
import { useState } from "react";

function SignUp() {
  const [credentials, setCredentials] = useState({});

  function handleForm(e) {
    e.preventDefault();
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
      </Content>
    </Wrapper>
  );
}

export default SignUp;
