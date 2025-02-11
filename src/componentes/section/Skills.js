import styles from './Skills.module.css';
import javascript from '../../image/skills/JS.svg';
import html from '../../image/skills/html.png';
import css from '../../image/skills/css.png';
import react from '../../image/skills/react.png';
import typeScript from '../../image/skills/typescript.svg';
import github from '../../image/skills/github.png';
import mongodb from '../../image/skills/mongodb.png';
import git from '../../image/skills/git.png';
import nextJs from '../../image/skills/Next.js.svg';
import nodejs from '../../image/skills/nodejs.png';
import {useState} from 'react';

function Skills() {
    const [info, setInfo] = useState(null);

    function infoOn(title) {
        const skill = infoData.find(item => item.title === title);
        setInfo(skill);
    }

    function infoOff() {
        setInfo(null);
    }

    const infoData = [
        {
            image: javascript,
            title: 'JavaScript',
            description: 'JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela permite adicionar interatividade, comportamentos dinâmicos e manipulação de elementos HTML em uma página. JavaScript também é usado em outros contextos, como desenvolvimento de aplicativos móveis e servidores.'
        },
        {
            image: html,
            title: 'HTML',
            description: 'HTML, que significa HyperText Markup Language, é a linguagem padrão para criação e estruturação de conteúdo na web. É usado para definir a estrutura e a semântica dos elementos de uma página, como cabeçalhos, parágrafos, imagens, links e muito mais.'
        },
        {
            image: css,
            title: 'CSS',
            description: 'CSS, que significa Cascading Style Sheets, é uma linguagem de estilo utilizada para definir a aparência visual e o layout de elementos HTML em uma página. Com CSS, você pode controlar cores, fontes, tamanhos, margens, posicionamento e outros aspectos visuais de um site.'
        },
        {
            image: react,
            title: 'React',
            description: 'React é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI) interativas e reativas. Ele permite criar componentes reutilizáveis que atualizam de forma eficiente e automática com base nos dados alterados, resultando em uma experiência de usuário mais rápida e responsiva.'
        }, {
            image: nodejs,
            title: 'Node.js',
            description: 'Node.js é um ambiente de execução JavaScript no lado do servidor, usado para construir aplicativos web escaláveis e de alto desempenho. Ele possui um modelo de E/S assíncrono e orientado a eventos, permitindo lidar com múltiplas conexões simultâneas. Sua popularidade se deve à sua eficiência e ao vasto ecossistema de módulos e pacotes disponíveis.'
        }, {
            image: github,
            title: 'GitHub',
            description: 'GitHub é uma plataforma de hospedagem de código-fonte e colaboração de desenvolvimento de software. Ele fornece controle de versão usando o Git e recursos de colaboração, como rastreamento de problemas, gerenciamento de projetos e revisão de código. O GitHub é amplamente utilizado por desenvolvedores para compartilhar, colaborar e contribuir para projetos de código aberto.'
        },
        {
            image: typeScript,
            title: 'TypeScript',
            description: 'TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao código. Ele é projetado para facilitar o desenvolvimento de aplicativos JavaScript em grande escala, fornecendo recursos avançados, como interfaces, tipos genéricos, classes e muito mais. O TypeScript é compilado para JavaScript puro e é amplamente adotado em projetos modernos de front-end e back-end.'
        },
        {
            image: mongodb,
            title: 'MongoDB',
            description: 'MongoDB é um banco de dados NoSQL de código aberto, orientado a documentos e altamente escalável. Ele armazena dados em documentos JSON flexíveis, permitindo que você modele dados de forma mais natural e eficiente. O MongoDB é amplamente utilizado em aplicativos modernos para lidar com grandes volumes de dados e suportar casos de uso complexos.'
        },
        {
            image: nextJs,
            title: 'Next.js',
            description: 'Next.js é um framework React de código aberto usado para construir aplicativos web modernos e otimizados para desempenho. Ele fornece recursos avançados, como renderização do lado do servidor, geração de páginas estáticas, roteamento automático e muito mais. O Next.js é amplamente adotado por desenvolvedores para criar aplicativos web escaláveis e de alto desempenho.'
        }


    ];

    return (
        <div className={
                styles.skill
            }
            id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div> {
                infoData.map((item, index) => (
                    <img key={index}
                        src={
                            item.image
                        }
                        alt={
                            item.title
                        }
                        onMouseEnter={
                            () => infoOn(item.title)
                        }
                        onMouseLeave={infoOff}/>
                ))
            } </div>
            {
            info && (
                <section>
                    <h2>{
                        info.title
                    }</h2>
                    <p className={styles.description}>{
                        info.description
                    }</p>
                </section>
            )
        } </div>
    );
}

export default Skills;
