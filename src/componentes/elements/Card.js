import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img,title, tech, description, repo, site}){

    return(
    <div className={styles.card}>
            <a target="_blank" href={site} rel="noreferrer">
             <img src={img} alt='ERROR'/> 
            </a>
            
             <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text="Acesse o repositorio" link={repo}/>
            </section>   
                        
    </div>)}

export default Card