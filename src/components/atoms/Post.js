import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const Post = props => (
    <Container>
        <Title>
            {props.post.title}
        </Title>
        <Date>
            {props.post.date}
        </Date>
        <Content>
            <ReactMarkdown source={props.post.content} />
        </Content>
    </Container>
);

const Container = styled.div`
    background-color: #F0F0F0;
    max-width: 30rem;
`;

const Title = styled.h1`
    color: #62929a;
`;

const Date = styled.p`
    color: #232323;
`;

const Content = styled.div`
    color: #232323;
`;