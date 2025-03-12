import React, { useEffect, useState } from 'react'
import { BotaoMaisInfoQuartos, ContainerPrecoQuartos, ContainerQuartos, ContainerTxtQuartos, ItemListaQuartos, LinkMaisInfoQuartos, ListaQuartos, QuartoImg, SubcontainerQuartos, TituloQuartos, TxtQuartos } from '../styles/QuartosStyles'
import axios from 'axios';

function Quartos() {

    const [quartos, setQuartos] = useState([]);
    useEffect(() => {
        const fetchQuartos = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/hotel/quartos');
                setQuartos(resp.data.result)
            } catch (error) {
                console.error('Erro ao listar quartos.', error);
            }
        }
        fetchQuartos();
    }, []);

    return (
        <ContainerQuartos> {/* Container column */}

            <TituloQuartos>Nossas Acomodações</TituloQuartos> {/* Txt com border-bottom */}

            <SubcontainerQuartos> {/* Container quarto row */}
                <QuartoImg src="/assets/quarto-casal-quartospg.png" alt="Foto do quarto de casal" />
                <ContainerTxtQuartos>  {/* Container txt quarto column */}
                    {Array.isArray(quartos) && quartos.map((quarto) => (
                        <div>
                            <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem' }}>{quarto.nome_quarto}</TxtQuartos>
                            <TxtQuartos>Nossos quartos de casal oferecem vistas panorâmicas do mar.</TxtQuartos>
                            <ListaQuartos>
                                <ItemListaQuartos>Tamanho: 150 m²</ItemListaQuartos>
                                <ItemListaQuartos>Camas: 1 Casal</ItemListaQuartos>
                            </ListaQuartos>
                        </div>

                    ))}

                </ContainerTxtQuartos>

                <ContainerPrecoQuartos> {/* Container txt btn quarto column */}
                    <TxtQuartos>A partir de:</TxtQuartos>
                    <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem', fontWeight: '700' }}>R$800,00</TxtQuartos>
                    <LinkMaisInfoQuartos to="/reserva/casal">
                        <BotaoMaisInfoQuartos>Mais Informações</BotaoMaisInfoQuartos>
                    </LinkMaisInfoQuartos>
                </ContainerPrecoQuartos>
            </SubcontainerQuartos>

            <SubcontainerQuartos> {/* Container quarto row */}
                <QuartoImg src="/assets/quarto-de-luxoquartospg.png" alt="Foto do quarto de luxo" />
                <ContainerTxtQuartos>  {/* Container txt quarto column */}
                    <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem' }}>Quarto de Luxo</TxtQuartos>
                    <TxtQuartos>Nossos quartos de luxo oferecem vistas panorâmicas do mar e um conforto incrível.</TxtQuartos>
                    <ListaQuartos>
                        <ItemListaQuartos>Tamanho: 340 m²</ItemListaQuartos>
                        <ItemListaQuartos>Camas: 3 Casal</ItemListaQuartos>
                    </ListaQuartos>
                </ContainerTxtQuartos>

                <ContainerPrecoQuartos> {/* Container txt btn quarto column */}
                    <TxtQuartos>A partir de:</TxtQuartos>
                    <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem', fontWeight: '700' }}>R$2500,00</TxtQuartos>
                    <LinkMaisInfoQuartos to="/reserva/luxo">
                        <BotaoMaisInfoQuartos>Mais Informações</BotaoMaisInfoQuartos>
                    </LinkMaisInfoQuartos>
                </ContainerPrecoQuartos>
            </SubcontainerQuartos>

            <SubcontainerQuartos> {/* Container quarto row */}
                <QuartoImg src="/assets/quarto-solteiroquartospg.png" alt="Foto do quarto de solteiro" />
                <ContainerTxtQuartos>  {/* Container txt quarto column */}
                    <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem' }}>Quarto de Solteiro</TxtQuartos>
                    <TxtQuartos>Nossos quartos de solteiro oferecem uma estadia tranquila com grande conforto.</TxtQuartos>
                    <ListaQuartos>
                        <ItemListaQuartos>Tamanho: 80 m²</ItemListaQuartos>
                        <ItemListaQuartos>Camas: 1 Solteiro</ItemListaQuartos>
                    </ListaQuartos>
                </ContainerTxtQuartos>

                <ContainerPrecoQuartos> {/* Container txt btn quarto column */}
                    <TxtQuartos>A partir de:</TxtQuartos>
                    <TxtQuartos style={{ opacity: '1', fontSize: '1.2rem', fontWeight: '700' }}>R$400,00</TxtQuartos>
                    <LinkMaisInfoQuartos to="/reserva/solteiro">
                        <BotaoMaisInfoQuartos>Mais Informações</BotaoMaisInfoQuartos>
                    </LinkMaisInfoQuartos>

                </ContainerPrecoQuartos>
            </SubcontainerQuartos>
        </ContainerQuartos>
    )
}

export default Quartos