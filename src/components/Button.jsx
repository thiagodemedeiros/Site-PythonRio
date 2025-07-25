import React from "react";

export default function Button ({ texto,background,backgroundTexto,width='170px',height='auto',fontsize='20px',padding='5px 0px',fontWeight=900 }) {
    return (
        <button className="button"
            style={{
                padding: padding,
                width: width,
                height: height,
                borderRadius: '30px',
                backgroundColor: background,
                color: backgroundTexto,
                border: 'none',
                fontWeight: fontWeight,
                fontSize: fontsize,
                textAlign:'center',
                cursor: 'pointer'
            }}
        >
            {texto}
        </button>
    )
}