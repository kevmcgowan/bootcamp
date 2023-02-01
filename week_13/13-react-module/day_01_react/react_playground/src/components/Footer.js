function Footer(props) {
    console.log(props)
    return (
        <footer>
            <p>&copy; 2023 - {props.title}</p>           
        </footer>
    )
}


export default Footer;