import './InputFormulario.css'

export default function InputFormulario (props) {
    return(
        <div>
            <div className='InputFormulario'>
                <h4 className='InputFormulario-h4'>{props.textoh4}</h4>
                <input
                    className='InputFormulario-input'
                    type="text"
                    name = {props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}