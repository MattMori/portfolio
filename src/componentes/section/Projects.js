import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import pokedex from '../../image/projects/pokedex.png'
import escoladnc from '../../image/projects/escoladnc.png'
import ccxp from '../../image/projects/ccxp.png'

function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
         <h1>Projetos</h1>
         <Card 
         img={pokedex}
         title="Pokedex"
         tech="JS,CSS,HTML"
         description="Projeto basico de uma pokedex consumindo a API de pokemon para popular e definir as cores segundo as caracteristicas dos pokemons."
         repo="https://github.com/MattMori/js-developer-pokedex"
         site="https://fabulous-clafoutis-334501.netlify.app/"
         /> 
         <Card 
         img={escoladnc}
         title="Landing page - Escola DNC"
         tech="JS,CSS,HTML"
         description="Desenvolvimento de uma landing page da Escola DNC, utilizando-se do figma como base para o lançamento da formação em tecnologia."
         repo="https://github.com/MattMori/Landind-page-Arquitetura"
         site="https://storied-klepon-0e060d.netlify.app/"
         /> 
         <Card 
         img={ccxp}
         title="CCXP 2022"
         tech="JS,CSS,HTML"
         description="Um projeto do site da ccxp de 2022 onde possui um cronometro e estilizações CSS e aplicação de video na pagina"
         repo="https://github.com/MattMori/CCXP"
         site="https://projetoccxpdnc1.netlify.app/"
         />
         <ButtonB text='Acesse meu repositorio' link='https://github.com/MattMori'/>
         </div>
    )
}   

export default Projects