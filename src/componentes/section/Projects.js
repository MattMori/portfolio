import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import MovieList from '../../image/projects/MovieList.png'
import BarSystem from '../../image/projects/BarSystem.png'
import MoriSolucoes from '../../image/projects/MoriSolucoes.png'

function Projects() {
    return (
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card
                img={MovieList}
                title="Cine Verse"
                tech="React, JS, Sass, API de Filmes"
                description="Projeto feito para consumir uma APi de Filmes e apresentar todos os seus dados em uma tela unica para cada filme, alem de possibilitar a pesquisa de filmes especificos, linguagem em portugues e uma grade com os filmes para ser feita a navegação."
                repo="https://github.com/MattMori/CineVerse"
                site="https://cine-verse-dun.vercel.app/"
            />
            <Card
                img={BarSystem}
                title="BarSystem"
                tech="React, JS, Sass, MongoDB"
                description="BarSystem é um sistema de gerenciamento de comandas e bebidas para bares e restaurantes. Este projeto foi desenvolvido como parte de um desafio para demonstrar habilidades de desenvolvimento web.."
                repo="https://github.com/MattMori/Sistema-de-Comanda---front"
                site="https://sistema-comanda-frontend.vercel.app/CadastroClientes"
            />
            <Card
                img={MoriSolucoes}
                title="Pagina de Serviços"
                tech="React, JS, Sass e Sheetmonkey"
                description="Projeto foi feito utilizando React, Javascript vanilla e Sass, alem da utilização do react router dom para criação de rotas, utilizei tambem o Sheetmonkey para capturar e enviar os dados inseridos no formulario."
                repo="https://github.com/MattMori/MoriManutencoes"
                site="https://mori-manutencoes.vercel.app/"
            />
            <ButtonB text='Acesse meu repositorio' link='https://github.com/MattMori' />
        </div>
    )
}

export default Projects