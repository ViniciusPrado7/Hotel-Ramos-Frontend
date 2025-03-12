import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BtnReservaQuarto, ContainerReservaQuarto, FormReservaQuarto, InputReservaQuarto, LabelReservaQuarto, TituloReservaQuarto } from '../styles/ReservaQuartoStyles';
import axios from 'axios';

function ReservaQuarto() {


    const { tipo } = useParams();
    const idQuartoTeste = 7;

    const { idQuarto } = useParams(); // Captura o tipo do quarto pela URL
    const [emailUser, setEmailUser] = useState('');

    // Define um título dinâmico para o formulário com base no tipo de quarto
    const titulos = {
        casal: 'Reserva - Quarto de Casal',
        luxo: 'Reserva - Quarto de Luxo',
        solteiro: 'Reserva - Quarto de Solteiro'
    }

    const  handleReserva = async (event) => {
        event.preventDefault();

        if(!emailUser){
            alert('Todos os campos precisam ser preenchidos');
        }
        try {
            const dataQuarto = {
                email_user : emailUser,
            }
            const resp = await axios.put('http://localhost:3001/hotel/reserva/quarto/3', dataQuarto);
    
            if(resp.status === 200 || resp.status === 201) {
                setEmailUser('');
                alert('Reserva feita com sucesso.');
            } else {
                setEmailUser('');
                alert('Reserva falhou.');
            }
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <ContainerReservaQuarto>
            <FormReservaQuarto>
                <TituloReservaQuarto>{titulos[tipo] || 'Reserva de Quarto'}</TituloReservaQuarto>

                <LabelReservaQuarto>Email:</LabelReservaQuarto>
                <InputReservaQuarto type="text" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />

                <BtnReservaQuarto onClick={handleReserva}>Cadastrar</BtnReservaQuarto>
            </FormReservaQuarto>
        </ContainerReservaQuarto>
    );
}

export default ReservaQuarto;
