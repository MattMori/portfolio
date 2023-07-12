import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
function Footer(){
    return(
        <div className={styles.footer}> 
        <ul>
                <li><a target="_blank" href='https://www.instagram.com/mori.mkv/' rel="noreferrer"><FaInstagram size={30}/></a></li>
                <li><a target="_blank" href='https://github.com/MattMori' rel="noreferrer"><FaGithub size={30}/></a></li>
                <li><a target="_blank" href='https://www.linkedin.com/in/morimkv/' rel="noreferrer"><FaLinkedin size={30}/></a></li>
                <li><a target="_blank" href='https://twitter.com/MoriMkv' rel="noreferrer"><FaTwitter size={30}/></a></li>
            </ul>
            <p>Mateus Mori © 2023</p>
        </div>
    )
}   

export default Footer