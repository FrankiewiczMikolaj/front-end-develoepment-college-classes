import React from "react";
import styled from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`

`;

const Links = styled.div`

`;

const Icons = styled.div`

`;

const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                    Logo
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About me</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    Button
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;