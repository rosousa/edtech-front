import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../services/requests";

export default function OneProductPage() {
    const navigate = useNavigate();
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(productId)
            .then(res => {
                setProduct(res.data);
            })
            .catch(res => window.location.reload());
    }, [])

    const { cart, setCart } = useContext(CartContext);

    function addToCart() {
        setCart([
            ...cart,
            product
        ]);
        navigate("/");
    };

    return (
        product === "" ?
            <h1>carregando</h1>
            :
            <Wrapper>
                <Header cart />
                <img src={`./images/${product.name}.png`} alt="carregando" />
                <h1>{product.name}</h1>
                <span>{product.description}</span>
                <div>
                    <h6>R${(Number(product.price) / 100).toFixed(2).toString().replace(".", ",")}</h6>
                    <button onClick={addToCart}>Adicionar ao Carrinho</button>
                </div>
            </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto Mono", monospace;

    img {
        width: 80%;
        height: auto;
        margin: 80px 0 30px;
    }

    h1 {
        width: 90%;
        font-size: 36px;
        font-weight: 700;
        text-align: start;
        margin-bottom: 30px;
    }

    span {
        width: 90%;
        height: fit-content;
        color: rgba(166, 166, 166, 1);
        font-size: 20px;
        line-height: 25px;
    }

    div:last-child {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        border: 1px solid grey;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 10px;
        position:fixed;
        bottom: 0;
        left: 0;
    }

    button {
        width: 150px;
        height: 100%;
        color: white;
        border: none;
        background-color: #0077e4;
        font-family: "Roboto Mono", monospace;
    }
`;