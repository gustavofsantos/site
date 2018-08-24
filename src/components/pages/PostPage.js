import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Page = styled.div`
    max-width: 30rem;
`;

export const PostPage = props => (
    <Page>
        <ReactMarkdown source={props.post} />
    </Page>
)