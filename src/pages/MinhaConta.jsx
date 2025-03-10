import React, { useState } from 'react'
import { BtnLogin, ContainerLogin, FormLogin, InputLogin, LabelLogin, TituloLogin } from '../styles/MinhaContaStyles'
import axios from 'axios';



function MinhaConta() {

  const [emailUser, setEmailUser] = useState('');
  const [nomeUser, setNomeUser] = useState('');

  const handleCadastro = async (event) => {
    event.preventDefault();

    const dataCadastro = {
      email_user: emailUser,
      nome_user: nomeUser,
    }
    const resp = await axios.post("http://localhost:3001/hotel/user", dataCadastro);
    console.log(dataCadastro);
    if(resp.status === 200 || resp.status === 201){
      setEmailUser('')
      setNomeUser('')
      alert('Cadastro concluido com sucesso.')
    } else {
      setEmailUser('')
      setNomeUser('')
      alert('Cadastro não efetuado.')
    }
  }

  return (
    <ContainerLogin>

      <FormLogin>

        <TituloLogin> Cadastro </TituloLogin>

        <LabelLogin > Email: </LabelLogin>
        <InputLogin type="text" onChange={(e)=>setEmailUser(e.target.value)}/>

        <LabelLogin> Nome: </LabelLogin>
        <InputLogin type="text" onChange={(e)=>setNomeUser(e.target.value)} />

        <BtnLogin onClick={handleCadastro}> Cadastrar </BtnLogin>

      </FormLogin>

      <FormLogin>
        <TituloLogin>Login</TituloLogin>
        <LabelLogin> Email: </LabelLogin>
        <InputLogin type="text" />

        <LabelLogin> Senha: </LabelLogin>
        <InputLogin type="password" />

        <BtnLogin> Login</BtnLogin>
      </FormLogin>

    </ContainerLogin>
  )
}

export default MinhaConta