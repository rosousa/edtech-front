import { useState } from "react";
import Wrapper from "../../styles/Wrapper";
import Header from "../../styles/Header";
import { Content } from "../../styles/Checkout";
import { Title } from "../../styles/AuthenticationStyle";
import { Steps, Step, Products } from "../../styles/Steps";
import { Button, Form } from "../../styles/AuthenticationStyle";

function Checkout() {
  const [checkoutInfo, setCheckoutInfo] = useState({});

  function handleForm(e) {
    e.preventDefault();
    console.log(checkoutInfo);
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>edTech</Title>
        </Header>
        <Form onSubmit={handleForm}>
          <Steps>
            <Step>
              <p>Método de pagamento</p>
              <span>
                <input
                  type="radio"
                  name="payment_method"
                  value="credito"
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, method: e.target.value })
                  }
                  required
                />
                <label htmlFor="credito">Crédito</label>
                <input
                  type="radio"
                  name="payment_method"
                  value="pix"
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, method: e.target.value })
                  }
                  required
                />
                <label htmlFor="pix">Pix</label>
                <input
                  type="radio"
                  name="payment_method"
                  value="boleto"
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, method: e.target.value })
                  }
                  required
                />
                <label htmlFor="boleto">Boleto</label>
              </span>
            </Step>
            <Step>
              <p>Revisar produtos</p>
              <Products>
                <div>
                  <img
                    src="https://i.ytimg.com/vi/nuC_wmAAG9A/maxresdefault.jpg"
                    alt="python1"
                  />
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <span>R$ 28,00</span>
                <div>
                  <img
                    src="https://i.ytimg.com/vi/nuC_wmAAG9A/maxresdefault.jpg"
                    alt="python2"
                  />
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <span>R$ 28,00</span>
                <div>
                  <img
                    src="https://i.ytimg.com/vi/nuC_wmAAG9A/maxresdefault.jpg"
                    alt="python3"
                  />
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <span>R$ 28,00</span>
              </Products>
            </Step>
            <Step>Total: R$199,00</Step>
          </Steps>
          <Button>Fazer pedido</Button>
        </Form>
      </Content>
    </Wrapper>
  );
}

export default Checkout;
