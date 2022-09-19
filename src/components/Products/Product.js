import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Product({ name, productId, price, description }) {
    const navigate = useNavigate();
    
    return (
        <Wrapper onClick={() => navigate(`/products/${productId}`, {
            state: {
                product: {
                    name,
                    productId,
                    price,
                    description
                }
            }
        })}>
            <img src={`./images/${name}.png`} alt="carregando" />
            <h3>{name}</h3>
            <span>R${(Number(price)/100).toFixed(2).toString().replace(".", ",")}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 250px;
    height: 220px;
    border-radius: 5px;
    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: "Roboto Mono", monospace;
    margin: 0 15px 5px 5px;

    img {
        width: 220px;
        height: 130px;
    }

    h3, p, span {
        width: 192px;
        text-align: start;
    }

    h3 {
        font-size: 16px;
        font-weight: 700;
    }

    span {
        font-size: 15px;
    }
`;