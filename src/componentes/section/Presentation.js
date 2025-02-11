import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import profile from '../../image/profile5.png'
import { useState, useEffect } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Mateus Mori!  ','Desenvolvedor Front End  ','Engenheiro de Software  '];
    const [loop, setLoop] = useState(0);
    const [isDelete, SetIsDelete] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);
    const [isMobile, setIsMobile] = useState(false); // Estado para controlar se é mobile ou não

    // Detectando a largura da tela
    useEffect(() => {
        const checkIfMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const toType = () => {
        if (isMobile) {
            // Se for mobile, exibe apenas a primeira opção
            setText(toRotate[0]);
            return;
        }

        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? (fullText.substring(0, text.length - 1)) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDelete && updatedText === fullText) {
            SetIsDelete(true);
            setDelta(period);
        } else if (isDelete && updatedText === '') {
            SetIsDelete(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.presentation} id="Presentation">
            <div>
                <h4>
                    <strong>Bem-vindo ao meu portfólio!</strong>
                </h4>
                <h1>Olá, Eu sou {text}</h1>
                <p>Sou estudante de Engenharia de Software na Unicesumar<br />
                    e atualmente cursando a formação em tecnologia na Escola DNC<br />
                    voltada para o desenvolvimento fullstack web.<br />
                    Aqui você vai conhecer mais sobre meus conhecimentos<br />
                    e projetos, fique à vontade para entrar em contato.
                </p>
                <ButtonA link="https://github.com/MattMori" text='Conecte-se Comigo!' />
            </div>
            <img src={profile} alt='ERROR' />
        </div>
    );
}

export default Presentation;
