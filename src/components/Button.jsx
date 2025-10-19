import React from "react";
import styled from "styled-components";

export default function Button({
    texto, 
    backgroundcolor = "FCFCFA",
    width = "200px",
    height = "50px",
    color = "48517C",
    fontsize = '14px',
}) 
{
    const StyledButton = styled.button`
        background-color: ${backgroundcolor};
        width: ${width};
        border-radius: 40px;
        height: ${height};
        font-weight: 700;
        font-size: ${fontsize};
        color: ${color};
        cursor: pointer;
        text-align: center;

        @media (max-width: 600px) {
            width: auto;
            height: auto;
            padding: 7px 20px;
            font-size: 16px;
        }
    `

    return (
        <StyledButton>{texto}</StyledButton>
    )
}