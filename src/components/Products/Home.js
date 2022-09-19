import styled from "styled-components";
import Header from "../common/Header";
import ProductsContext from "../../contexts/ProductsContext";
import { useState } from "react";
import Category from "./Category";

export default function Home() {
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "HTML",
            description: "Aprenda a estruturar sua página web",
            price: "1000",
            category: "front-end básico"
        },
        {
            id: "2",
            name: "Css",
            description: "Aprenda a estilizar sua página",
            price: "1000",
            category: "front-end básico"
        },
        {
            id: "3",
            name: "JavaScript",
            description: "dê vida à sua aplicação",
            price: "1000",
            category: "front-end básico"
        },
        {
            id: "4",
            name: "React",
            description: "A linguagem mais utilizada no mercado front-end, evolua seus conhecimentos",
            price: "4500",
            category: "front-end intermediário"
        },
        {
            id: "5",
            name: "React aprimorado",
            description: "esteja preparado para se tornar um dev front completo",
            price: "5000",
            category: "front-end intermediário"
        },
        {
            id: "6",
            name: "React Pro",
            description: "Domine a linguagem mais utilizada no mercado e tenha empresaas brigando por você",
            price: "6500",
            category: "front-end avançado"
        },
        {
            id: "7",
            name: "Node para iniciantes",
            description: "Comece a construir suas próprias APIs, e dê um passo a mais para se tornar um dev full esterco",
            price: "2000",
            category: "back-end básico"
        },
        {
            id: "8",
            name: "MongoDB",
            description: "Aprenda a armazenar dados da sua aplicação e como manipular um Banco de dados",
            price: "2000",
            category: "back-end básico"
        },
        {
            id: "9",
            name: "Construção de um computador: teoria",
            description: "Nesse curso você vai entender cada componente de um computador, e como ele funciona! É o começo na sua jornada para entender tudo sobre PC",
            price: "2000",
            category: "hardware básico"
        }
    ]);

    return (
        <Wrapper>
            <Header cart />
            <ProductsContext.Provider value={{ products, setProducts }}>
                <Category category="front-end básico" />
                <Category category="front-end intermediário" />
                <Category category="front-end avançado" />
                <Category category="back-end básico" />
                <Category category="hardware básico" />
            </ProductsContext.Provider>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(238, 238, 238);
`;