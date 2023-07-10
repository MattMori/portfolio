import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/mori.mkv/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/MattMori'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/morimkv/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://twitter.com/MoriMkv'><FaTwitter size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar