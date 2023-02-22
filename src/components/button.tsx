interface ButtonProp
{
    className ?: string,
    onClick?: any,
    text: string,
    type?: any
}
const Button = (prop: ButtonProp) =>{
    return (
        <button className={prop.className} onClick={prop.onClick} type={prop.type}>
            {prop.text}
        </button>
    )
}

export default Button;