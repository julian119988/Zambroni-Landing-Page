import { useContext } from "react";
import styled from "styled-components";
import profilePic from "../../assets/img/circleProfilePic.png";
import { LangContext } from "../../lang";
import bookIcon from "../../assets/icons/book.png";

const FirstSection = () => {
    const { firstSection } = useContext(LangContext);
    const { titleSection, bioSection, studiesSection } = firstSection;
    return (
        <Main>
            <TitleSection>
                <ProfilePic src={profilePic} alt="Profile picture" />
                <TitleTextSection>
                    <Title>{titleSection.title}</Title>
                    <Text style={{ marginTop: ".3vh", fontSize: "1.2rem" }}>
                        {titleSection.text}
                    </Text>
                </TitleTextSection>
            </TitleSection>
            <BioSection>
                <Title>{bioSection.title}</Title>
                <Text>{bioSection.text}</Text>
            </BioSection>
            <StudiesAndCourses>
                <Title>{studiesSection.title}</Title>
                <StudiesAndCoursesList>
                    <ItemList>
                        <Text style={{ margin: "0" }}>
                            {studiesSection.item1.institution}
                        </Text>
                        <Text style={{ margin: "0" }}>
                            {studiesSection.item1.course}
                        </Text>
                    </ItemList>
                    <ItemList>
                        <Text> {studiesSection.item2.institution} </Text>
                        <Text style={{ margin: "0" }}>
                            {studiesSection.item2.course}
                        </Text>
                    </ItemList>
                    <ItemList>
                        <Text>{studiesSection.item3.institution}</Text>
                        <Text style={{ margin: "0" }}>
                            {studiesSection.item3.course}
                        </Text>
                    </ItemList>
                </StudiesAndCoursesList>
            </StudiesAndCourses>
        </Main>
    );
};
export default FirstSection;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding-bottom: 4vh;
    padding-top: 3vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 8vw;
    padding-right: 8vw;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4vh;
`;
const ProfilePic = styled.img`
    min-width: 150px;
    width: 40vw;
    max-width: 300px;
    aspect-ratio: 1;
`;
const TitleTextSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 7vw;
`;
const Title = styled.h3`
    margin: 0;
    padding: 0;
    color: white;
    font-size: 2rem;
    font-weight: normal;
`;
const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-top: 1.4vh;
    max-width: 40ch;
`;
const BioSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8vw;
    padding-right: 8vw;
    margin-bottom: 3.8vh;
`;
const StudiesAndCourses = styled.div`
    padding-left: 8vw;
    padding-right: 8vw;
    display: flex;
    flex-direction: column;
`;
const StudiesAndCoursesList = styled.ul`
    padding-left: 4vw;
    position: relative;
`;
const ItemList = styled.li`
    color: white;
    font-size: 1rem;
    font-weight: 400;
    list-style: none;
    &:before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        background-image: url(${bookIcon});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
    }
`;
