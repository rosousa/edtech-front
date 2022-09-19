import styled from "styled-components";
import { GrBasket } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Title } from "../../styles/AuthenticationStyle";

export default function Header({ cart }) {
    const navigate = useNavigate();

    return (
        <Wrapper cart={cart}>
            <Title>edTech</Title>
            {cart ?
                    <GrBasket />
                :
                ""}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #0077e4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    ${({ cart }) => cart ? `

        svg {
            position: fixed;
            top: 10px;
            right: 10px;
            font-size: 35px;

            path {
                stroke: rgba(255, 255, 255, 1);
            }
        }
    ` : ""}
`;