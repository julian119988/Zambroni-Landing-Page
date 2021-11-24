import styled from "styled-components";
import githubIcon from "../../assets/icons/github.png";
import linkIcon from "../../assets/icons/link.png";
import { motion } from "framer-motion";

const ProyectCard = (props) => {
    const { title, description, github, href } = props;
    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <Main>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <LinksSection>
                {github && (
                    <LinkButton
                        icon={githubIcon}
                        target="_blank"
                        href={github}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileFocus="hover"
                    />
                )}
                {href && (
                    <LinkButton
                        icon={linkIcon}
                        target="_blank"
                        href={href}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileFocus="hover"
                    />
                )}
            </LinksSection>
        </Main>
    );
};

const Main = styled.div`
    background: #ffffff;
    box-shadow: inset 0px 0px 4px 3px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    max-width: 150px;
    width: 35vw;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 1.3rem;
    margin-left: 3vw;
    margin-right: 3vw;
    text-align: center;
    @media (min-width: 800px) {
        font-size: 1.7rem;
    }
`;

const Description = styled.p`
    margin: 0;
    text-align: center;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 1rem;
    @media (min-width: 800px) {
        font-size: 1.3rem;
    }
`;

const LinksSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    padding-right: 10%;
    padding-left: 10%;
    margin-top: auto;
    margin-bottom: 1.5vh;
`;
const LinkButton = styled(motion.a)`
    background: #000000;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    background-image: url(${(props) => props.icon});
    background-size: 70% 70%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    padding: 10px;
`;

export default ProyectCard;
