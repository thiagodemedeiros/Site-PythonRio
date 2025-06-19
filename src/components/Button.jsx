import React from "react";

export default function Button ({ texto, background, backgroundTexto }) {
    return (
        <button 
            style={{
                padding: '5px 50px',
                borderRadius: '30px',
                backgroundColor: background,
                color: backgroundTexto,
                border: 'none',
                fontWeight: 900,
                fontSize: '24px'
            }}
        >
            {texto}
        </button>
    )
}