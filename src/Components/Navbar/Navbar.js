import { useContext } from "react";
import { LangContext } from "../../lang";
import styled from "styled-components";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.png";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import crossIcon from "../../assets/icons/cross.png";

export default function Navbar(props) {
    const [open, cycleOpen] = useCycle(false, true);
    const { nav } = useContext(LangContext);
    const { toggleLanguage } = props;
    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
    };

    const itemVariants = {
        closed: {
            opacity: 0,
        },
        open: { opacity: 1 },
    };
    return (
        <Main>
            <Title>Julian Zambroni</Title>
            <HamburgerIcon
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 10px white" }}
                whileTap={{ scale: 0.9, boxShadow: "0px 0px 10px 3px white" }}
                src={hamburgerIcon}
                alt="Icon to open de menu"
                onClick={cycleOpen}
            />
            <AnimatePresence>
                {open && (
                    <Aside
                        initial={{
                            width: 0,
                            height: "100vh",
                            border: "1px solid white",
                        }}
                        animate={{
                            width: "100vw",
                            height: "100vh",
                        }}
                        exit={{
                            width: 0,
                            border: 0,
                            transition: { delay: 0.7, duration: 0.3 },
                        }}
                    >
                        <Menu
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            <CloseIcon
                                key="6"
                                src={crossIcon}
                                alt="Cross icon to close menu"
                                onClick={cycleOpen}
                                variants={itemVariants}
                            />
                            <Items
                                key="1"
                                variants={itemVariants}
                                onClick={toggleLanguage}
                            >
                                {nav.lang}
                            </Items>
                            <Items key="3" variants={itemVariants}>
                                {nav.work}
                            </Items>
                            <Items key="4" variants={itemVariants}>
                                {nav.tech}
                            </Items>
                            <Items key="5" variants={itemVariants}>
                                {nav.contact}
                            </Items>
                        </Menu>
                    </Aside>
                )}
            </AnimatePresence>
        </Main>
    );
}
const CloseIcon = styled(motion.img)`
    position: absolute;
    top: 8vh;
    right: 15vw;
    cursor: pointer;
    width: 30px;
    height: 30px;
    z-index: 99;
`;
const Main = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    height: 10vh;
    align-items: center;
    position: relative;
`;

const Title = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    margin-left: 8vw;
    font-size: 2rem;
`;

const HamburgerIcon = styled(motion.img)`
    margin-left: auto;
    margin-right: 8vw;
    cursor: pointer;
`;

const Menu = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 38vh 0 38vh 0;
`;
const Aside = styled(motion.aside)`
    position: absolute;
    z-index: 98;
    right: 0;
    top: 0;
    border-left: 1px solid white;
`;

const Items = styled(motion.h4)`
    padding: 0;
    margin: 0;
    color: white;
    display: inline-block;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
`;
