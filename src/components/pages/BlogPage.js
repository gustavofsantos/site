import React from "react";
import styled from "styled-components";
import Posts from "../atoms/Posts";

const Container = styled.div`
    max-width: 30rem;
`;

export const BlogPage = props => (
    <Container>
        <Posts />
    </Container>
);