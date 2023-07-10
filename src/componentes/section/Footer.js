import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
function Footer(){
    return(
        <div className={styles.footer}> 
        <ul>
                <li><a href='https://www.instagram.com/mori.mkv/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/MattMori'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/morimkv/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://twitter.com/MoriMkv'><FaTwitter size={30}/></a></li>
            </ul>
            <p>mattmori16@gmail.com</p>
            <p>Mateus Mori © 2023</p>
        </div>
    )
}   

export default Footer