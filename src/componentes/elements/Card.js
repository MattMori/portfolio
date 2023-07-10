import styles from './Card.module.css'
import ButtonB from './ButtonB'
function Card({img,tittle, tech, description, repo, site}){
    return(
    <div className={styles.card}>
            <a href={site}>
             <img src={img} alt='ERROR'/> 
            </a>
            <section>
                <h3>{tittle}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text="Acesse o repositorio" link={repo}/>
            </section>
    </div>
)}

export default Card