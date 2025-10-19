import React from "react";
import styled from "styled-components";

export default function Button({
    texto, 
    backgroundcolor = "FCFCFA",
    width = "200px",
    height = "50px",
    color = "48517C",
}) 
{
    const StyledButton = styled.button`
        background-color: ${backgroundcolor};
        width: ${width};
        border-radius: 40px;
        height: ${height};
        font-weight: 700;
        color: ${color};
        cursor: pointer;
    `

    return (
        <StyledButton>{texto}</StyledButton>
    )
}