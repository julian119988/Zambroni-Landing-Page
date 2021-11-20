import styled from "styled-components";
import linkedinIcon from "../../assets/icons/linkedin.png";
import mailIcon from "../../assets/icons/mail.png";
import githubIcon from "../../assets/icons/github.png";
const Footer = () => {
    return (
        <Main>
            <PrettyHr />
            <CopyRightText>
                © 2021 Julian Zambroni. All rights reserved.
            </CopyRightText>
            <SocialMediaIconsDiv>
                <SocialMediaIcons
                    icon={linkedinIcon}
                    href="https://www.linkedin.com/in/julian-zambroni/"
                    target="_blank"
                />
                <SocialMediaIcons
                    icon={githubIcon}
                    href="https://github.com/julian119988"
                    target="_blank"
                />
                <SocialMediaIcons
                    icon={mailIcon}
                    href="mailto:julian.zambroni@gmail.com"
                    target="_blank"
                />
            </SocialMediaIconsDiv>
        </Main>
    );
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 8vw;
    padding-left: 8vw;
    padding-bottom: 3vh;
    background-color: black;
`;

const PrettyHr = styled.div`
    height: 1px;
    width: 100%;
    background-color: white;
`;

const CopyRightText = styled.p`
    font-size: 1rem;
    color: white;
    text-align: center;
    margin: 3vh 0 3vh 0;
`;

const SocialMediaIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
`;
const SocialMediaIcons = styled.a`
    display: flex;
    flex-direction: row;
    margin-left: 2vw;
    margin-right: 2vw;
    aspect-ratio: 1;
    width: 7.5vw;
    max-width: 50px;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
`;

export default Footer;
