import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function Product({ name, productId, price, image, cartProduct }) {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);

    function handleRemoveItem() {
        const indexToRemove = cart.findIndex(product => product._id === productId);
        const newCartBeforeIndex = cart.slice(0, indexToRemove);
        const newCartAfterIndex = cart.slice((indexToRemove + 1));

        const newCart = newCartBeforeIndex.concat(newCartAfterIndex);

        setCart([...newCart]);
    };

    return (
        cartProduct ?
            <Wrapper cart={cartProduct}>
                <img src={image} alt="carregando" />
                <div>
                    <h3>{name}</h3>
                    <span>R${(Number(price) / 100).toFixed(2).toString().replace(".", ",")}</span>
                </div>
                <TiDeleteOutline onClick={handleRemoveItem} />
            </Wrapper>
            :
            <Wrapper onClick={() => navigate(`/products/${productId}`)} cart={cartProduct}>
                <img src={image} alt="carregando" />
                <h3>{name}</h3>
                <span>R${(Number(price) / 100).toFixed(2).toString().replace(".", ",")}</span>
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
        object-fit: contain;
    }

    h3, span {
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

    ${({ cart }) => cart ? `
        width: 90vw;
        height: 150px;
        flex-direction: initial;
        justify-content: space-between;
        position: relative;
        margin-bottom: 30px;

        h3 {
            width: fit-content;
            margin-bottom: 15px;
        }

        span {
            width: fit-content;
        }

        div {
            width: 100px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        svg {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 26px;
        }
    `
        :
        ''}
`;