const Button = (prop: any) =>{
    return (
        <button className={prop.className} onClick={prop.onClick}>
            {prop.text}
        </button>
    )
}

export default Button;