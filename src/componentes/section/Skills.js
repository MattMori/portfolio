import styles from './Skills.module.css'
import javascript from'../../image/skills/JS.svg'
import html from'../../image/skills/html.png'
import css from'../../image/skills/css.png'
import react from'../../image/skills/react.png'
import github from'../../image/skills/github.png'
import nodejs from'../../image/skills/nodejs.png'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
         <h1>Habilidades</h1>
         <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
         <div>
            <img src={javascript}/>
            <img src={html}/>
            <img src={css}/>
            <img src={react}/>
            <img src={nodejs}/>
            <img src={github}/>
            
         </div>
         </div>
    )
}   

export default Skills