import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
    return (
        <div className="container" id="page-teacher-form">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher o formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="avatar"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" id="whatsapp"/>
                    </div>
                </fieldset>
            </main>
        </div>
    );
}

export default TeacherForm;