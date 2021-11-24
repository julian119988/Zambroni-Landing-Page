import styled from "styled-components";
import mongodbIcon from "../../assets/icons/stackIcons/mongoDbIcon.png";
import jsIcon from "../../assets/icons/stackIcons/jsIcon.png";
import expressIcon from "../../assets/icons/stackIcons/expressIcon.png";
import nodeIcon from "../../assets/icons/stackIcons/nodeIcon.png";
import reactIcon from "../../assets/icons/stackIcons/reactIcon.png";
import npmIcon from "../../assets/icons/stackIcons/npmIcon.png";
import mysqlIcon from "../../assets/icons/stackIcons/mysqlIcon.png";
import gitIcon from "../../assets/icons/stackIcons/gitIcon.png";
import figmaIcon from "../../assets/icons/stackIcons/figmaIcon.png";
import awsIcon from "../../assets/icons/stackIcons/awsIcon.png";
import htmlIcon from "../../assets/icons/stackIcons/htmlIcon.png";
import cssIcon from "../../assets/icons/stackIcons/cssIcon.png";
import googleCloudIcon from "../../assets/icons/stackIcons/googleCloudIcon.png";
import webpackIcon from "../../assets/icons/stackIcons/webpackIcon.png";
import babelIcon from "../../assets/icons/stackIcons/babelIcon.png";
import es6Icon from "../../assets/icons/stackIcons/es6Icon.png";
import electron from "../../assets/icons/stackIcons/electronIcon.png";
import reduxIcon from "../../assets/icons/stackIcons/reduxIcon.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LangContext } from "../../lang";

const StackSection = (props) => {
    const { stackSection } = useContext(LangContext);
    const blackCircleVariants = {
        static1: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0,
            },
            y: ["-10%", "0%"],
        },
        static2: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.1,
            },
            y: ["-10%", "0%"],
        },
        static3: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.2,
            },
            y: ["-10%", "0%"],
        },
        static4: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.3,
            },
            y: ["-10%", "0%"],
        },
        static5: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.4,
            },
            y: ["-10%", "0%"],
        },
        static6: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.5,
            },
            y: ["-10%", "0%"],
        },
        static7: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.6,
            },
            y: ["-10%", "0%"],
        },
        static8: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.7,
            },
            y: ["-10%", "0%"],
        },
        static9: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.8,
            },
            y: ["-10%", "0%"],
        },
        static10: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 0.9,
            },
            y: ["-10%", "0%"],
        },
        static11: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1,
            },
            y: ["-10%", "0%"],
        },
        static12: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.1,
            },
            y: ["-10%", "0%"],
        },
        static13: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.2,
            },
            y: ["-10%", "0%"],
        },
        static14: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.3,
            },
            y: ["-10%", "0%"],
        },
        static15: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.4,
            },
            y: ["-10%", "0%"],
        },
        static16: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.5,
            },
            y: ["-10%", "0%"],
        },
        static17: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.6,
            },
            y: ["-10%", "0%"],
        },
        static18: {
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.2,
                delay: 1.7,
            },
            y: ["-10%", "0%"],
        },
    };
    return (
        <Main ref={props.techRef}>
            <Title>{stackSection.title}</Title>
            <StackIconsGrid>
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static1"
                    src={mongodbIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static2"
                    src={jsIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static3"
                    src={expressIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static4"
                    src={nodeIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static5"
                    src={reactIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static6"
                    src={npmIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static7"
                    src={mysqlIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static8"
                    src={gitIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static9"
                    src={figmaIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static10"
                    src={awsIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static11"
                    src={htmlIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static12"
                    src={cssIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static13"
                    src={googleCloudIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static14"
                    src={webpackIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static15"
                    src={babelIcon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static16"
                    src={es6Icon}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static17"
                    src={electron}
                    alt="MongoDB Icon"
                />
                <BlackCircle
                    variants={blackCircleVariants}
                    animate="static18"
                    src={reduxIcon}
                    alt="MongoDB Icon"
                />
            </StackIconsGrid>
        </Main>
    );
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8vw;
    padding-right: 8vw;
    margin-bottom: 5vh;
`;

const Title = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: normal;
    margin-top: 3vh;
    margin-bottom: 4vh;
    @media (min-width: 800px) {
        margin-left: 6vw;
        font-size: 2.5rem;
        margin-top: 5vh;
        margin-bottom: 6vh;
    }
`;

const StackIconsGrid = styled.div`
    padding-left: 8vw;
    padding-right: 8vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    justify-content: center;
    align-items: center;
    @media (min-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(85px, 150px));
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(85px, 200px));
    }
`;

const BlackCircle = styled(motion.img)`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    aspect-ratio: 1;
    max-width: 125px;
    min-width: 85px;
`;
export default StackSection;
