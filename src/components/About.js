import styled from "styled-components";

const StyleDiv = styled.div`
color: ${(props) => props.theme.primaryColor};
`;

const About = () => {
    return( 
    <StyleDiv>
    <h1> This is an about Page</h1> 
    </StyleDiv>
)
    }

export default About;

