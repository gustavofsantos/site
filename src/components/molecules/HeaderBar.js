import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = props => (
    <Bar>
        <Menu>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <MenuItem>Start</MenuItem>
            </Link>
            <Link to="/resume" style={{ textDecoration: 'none' }}>
                <MenuItem active>Resume</MenuItem>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
                <MenuItem>Blog</MenuItem>
            </Link>
        </Menu>
    </Bar>
);

const Bar = styled.nav`
    background-color: #5c5757;
    width: 100%;
    box-sizing: border-box;
    display: block;
`;

const Menu = styled.ul`
    border-bottom: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

const MenuItem = styled.p`
    background: transparent;
    padding: 10px 10px 10px;
    margin-right: 5px;
    font-size: 0.9em;
    border-radius: 5px;
    color: #AAA;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #FFF;
        background: #888;
    }

    &:visited {
        color: #FFF;
        background: #888;
    }


`;