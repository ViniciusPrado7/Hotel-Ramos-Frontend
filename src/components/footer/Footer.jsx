import React from 'react'
import { ContainerFooter, ContainerFooterCopy, FooterContact, FooterContactBtn, FooterContactForm, FooterContactInput, FooterInfos, FooterInfosTxt, FooterSocialMedia, FooterSocialMediaLink, SubcontainerFooter } from '../../styles/FooterStyles'
import { FaTwitter, FaTripadvisor, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    
    {/* Função que retorna o ano */}
    const getDate = () => {
        return new Date().getFullYear();
    }

    return (
        <ContainerFooter> {/* Container do Footer */}
            <SubcontainerFooter> {/* SubContainer do Footer */}
                <FooterInfos> {/* Container de informações do Footer */}
                    <FooterInfosTxt> {/* Textos de informações do Footer */}
                        AV. Gov. Celso Ramos, 154
                        <br /> {/* Quebra de linha */}
                        Porto Belo, SC 12345-678 | 0-800-000-0000
                    </FooterInfosTxt>

                    <FooterSocialMedia> {/* Container das redes sociais */}
                        <FooterSocialMediaLink to='https://x.com/?lang=en' target='_blank'> {/* Link da Rede social */}
                            <FaTwitter /> {/* Ícone da Rede social */}
                        </FooterSocialMediaLink>

                        <FooterSocialMediaLink to='https://www.tripadvisor.com.br/' target='_blank'> {/* Link da Rede social */}
                            <FaTripadvisor /> {/* Ícone da Rede social */}
                        </FooterSocialMediaLink>
                        
                        <FooterSocialMediaLink to='https://www.facebook.com/?locale=pt_BR' target='_blank'> {/* Link da Rede social */}
                            <FaFacebookF /> {/* Ícone da Rede social */}
                        </FooterSocialMediaLink>
                        
                        <FooterSocialMediaLink to='https://www.instagram.com/' target='_blank'> {/* Link da Rede social */}
                            <FaInstagram /> {/* Ícone da Rede social */}
                        </FooterSocialMediaLink>
                        
                    </FooterSocialMedia>
                </FooterInfos>

                <FooterContact> {/* Container de contato */}
                    <FooterContactForm> {/* Formulário de contato */}
                        <FooterInfosTxt>Entre em contato conosco</FooterInfosTxt> {/* Texto do formulário */}
                        <FooterContactInput type="text" placeholder='Insira seu e-mail aqui' /> {/* Input de e-mail do contato */}
                        <FooterContactBtn>Participar</FooterContactBtn> {/* Botão de submit do formulário */}
                    </FooterContactForm>
                </FooterContact>
            </SubcontainerFooter>

            <ContainerFooterCopy> &copy; {getDate()} por Lucas Guesser</ContainerFooterCopy> {/* Container Copyright do site */}
        </ContainerFooter>
    )
}

export default Footer