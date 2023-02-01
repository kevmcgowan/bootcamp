function Header(props) {
    console.log(props)
    return (
        <header>
            <h3>{props.title}</h3>           
        </header>
    )
}

export default Header;