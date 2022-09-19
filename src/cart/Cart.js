import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/Products/Product";
import Header from "../components/common/Header";

export default function Cart() {
    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        cart.length === 0 ?
            <h1>Seu carrinho está vazio</h1>
            :
            <Wrapper>
                <Header />
                {cart.map(product => (
                    <Product
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        productId={product._id}
                        price={product.price}
                        image={product.image}
                        cartProduct
                    />
                ))}
                <button onClick={() => navigate("/checkout")}>Finalizar compra</button>
            </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(238, 238, 238);
    padding-top: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 60%;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #0077e4;
        font-family: "Roboto Mono", monospace;
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
    }
`;