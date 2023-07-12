import styles from './ButtonA.module.css'
function ButtonA({text,link}){
    return(
        <div>
        <a target="_blank" href={link} rel="noreferrer"><button className={styles.btn}>{text}</button></a>
            
        </div>
    )
}

export default ButtonA