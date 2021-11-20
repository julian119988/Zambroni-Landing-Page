import styled from "styled-components";
import ProyectCard from "./ProyectCard";
import { LangContext } from "../../lang";
import { useContext } from "react";
const WorkSection = () => {
    const { proyectsSection } = useContext(LangContext);
    return (
        <Main>
            <Title>{proyectsSection.title}</Title>
            <ProyectsGrid>
                {proyectsSection.works.map((project, index) => (
                    <ProyectCard
                        key={index + 10}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        href={project.link}
                    />
                ))}
            </ProyectsGrid>
        </Main>
    );
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 8vw;
    padding-right: 8vw;
    padding-top: 3vh;
    padding-bottom: 7vh;
`;

const Title = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 3vh;
    font-size: 1.7rem;
`;

const ProyectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-gap: 30px;
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        grid-gap: 5vw;
    }

    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;
export default WorkSection;
