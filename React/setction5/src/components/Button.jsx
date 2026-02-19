const Button = ({children,text,color="black"}) =>{ // 구조분해 활당
    return (<button style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
};


export default Button;