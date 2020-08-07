import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/116641?s=460&u=c02f11fc88fc293c52d41a465ce160dfc4112256&v=4" alt="Germano Ricardi"/>
                        <div>
                            <strong>Germano Ricardi</strong>
                            <span>React Native</span>
                        </div>
                    </header>

                    <p>
                        Programador Full Stack que ama ver linhas de códigos, Deus acima de tudo, pai de uma princesa e esposo feliz! =)
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;