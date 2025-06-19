import React from "react";

export default function Button ({ texto,background,backgroundTexto,width='170px',height='auto',fontsize='20px' }) {
    return (
        <button 
            style={{
                padding: '5px 0px',
                width: width,
                height: height,
                borderRadius: '30px',
                backgroundColor: background,
                color: backgroundTexto,
                border: 'none',
                fontWeight: 900,
                fontSize: fontsize
            }}
        >
            {texto}
        </button>
    )
}