import React from "react";
import styled from "styled-components";

export const HeaderBar = props => (
    <Bar>
        <Menu>
            <MenuItem>
                item 1
            </MenuItem>
            <MenuItem>
                Item 2
            </MenuItem>
        </Menu>
    </Bar>
);

const Bar = styled.nav`
    background-color: #5c5757;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: block;
`;

const Menu = styled.ul`
    padding: 20px 10px;
    border-bottom: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

const MenuMobile = styled.ul`
    align-items: center;
    flex-direction: column;
    height: 0;
    justify-content: space-around;
    padding: 0;
    transition: height 500ms;
    overflow: hidden;

`;

const MenuItem = styled.li`
    padding: 10px 10px 10px;
    margin-right: 5px;
    font-size: 0.9em;
    border-radius: 5px;
`;