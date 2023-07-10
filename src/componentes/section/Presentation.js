import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation() {
    return (
        <div className={
                styles.presentation
            }
            id="Presentation">
            <h4>
                <strong>Bem vindo ao meu portfolio!</strong>
            </h4>
            <h1>Olá, Eu sou Mateus Mori!</h1>
            <p> Sou estudante de Engenharia de Software na Unicesumar<br/>
                e atualmente cursando a formação em tecnologia na Escola DNC<br/>
                voltada para o desenvolvimento fullstack web.<br/>
                Aqui você vai conhecer mais sobre meus conhecimentos<br/>
                e projetos, fique a vontade para entrar em contato.
            </p>
            <ButtonA link="https://github.com/MattMori" text='Conecte-se Comigo'/>
        </div>

    )
}

export default Presentation
