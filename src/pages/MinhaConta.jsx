import React, { useState } from 'react'
import { BtnLogin, ContainerLogin, FormLogin, InputLogin, LabelLogin, StyledError, StyledSuccess, TituloLogin } from '../styles/MinhaContaStyles'
import axios from 'axios';

function MinhaConta() {

  const [emailUser, setEmailUser] = useState('');
  const [nomeUser, setNomeUser] = useState('');

  const [errorCad, setErroCad] = useState('');
  const [successCad, setSucessCad] = useState('');

  const[emailAdmin, setEmailAdmin] = useState('');
  const[nomeAdmin, setNomeAdmin] = useState('');

  const [errorCadAdmin, setErroCadAdmin] = useState('');
  const [successCadAdmin, setSucessCadAdmin] = useState('');

  

  const handleCadastro = async (event) => {
    event.preventDefault();

    const dataCadastro = {
      email_user: emailUser,
      nome_user: nomeUser,
    }
    if (!emailUser || !nomeUser) {
      setErroCad('Todos os campos precisam ser preenchidos.');
      setSucessCad('');
    } else {
      try {
        const resp = await axios.post("http://localhost:3001/hotel/user", dataCadastro);
        if (resp.status === 200 || resp.status === 201) {
          setEmailUser('');
          setNomeUser('');
          setSucessCad('Cadastro concluido com sucesso.');
          setErroCad('');
        } else {
          setEmailUser('');
          setNomeUser('');
          setErroCad('Cadastro não efetuado.');
          setSucessCad('');
        }
      } catch (error) {
        setErroCad('Erro ao cadastrar.');
        setSucessCad('');
      }
    }

  }

  const handleCadastroAdmin = async (event) => {
    event.preventDefault();

    const dataCadastroAdmin = {
      email_admin: emailAdmin,
      nome_admin: nomeAdmin,
    }
    if (!emailAdmin || !nomeAdmin) {
      setErroCadAdmin('Todos os campos precisam ser preenchidos.');
      setSucessCadAdmin('');
    } else {
      try {
        const resp = await axios.post("http://localhost:3001/hotel/admin", dataCadastroAdmin);
        if (resp.status === 200 || resp.status === 201) {
          setEmailAdmin('');
          setNomeAdmin('');
          setSucessCadAdmin('Cadastro concluido com sucesso.');
          setErroCadAdmin('');
        } else {
          setEmailAdmin('');
          setNomeAdmin('');
          setErroCadAdmin('Cadastro não efetuado.');
          setSucessCadAdmin('');
        }
      } catch (error) {
        setErroCadAdmin('Erro ao cadastrar.');
        setSucessCadAdmin('');
      }
    }

  }


  return (
    <ContainerLogin>

      <FormLogin>

        <TituloLogin> Cadastro </TituloLogin>

        <LabelLogin > Email: </LabelLogin>
        <InputLogin type="text" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />

        <LabelLogin> Nome: </LabelLogin>
        <InputLogin type="text" value={nomeUser} onChange={(e) => setNomeUser(e.target.value)} />

        <BtnLogin onClick={handleCadastro}> Cadastrar </BtnLogin>
        {errorCad && <StyledError>{errorCad}</StyledError>}
        {successCad && <StyledSuccess>{successCad}</StyledSuccess>}

      </FormLogin>

      <FormLogin>
        <TituloLogin>Login</TituloLogin>
        <LabelLogin> Email: </LabelLogin>
        <InputLogin type="text" />

        <LabelLogin> Nome: </LabelLogin>
        <InputLogin type="text" />

        <BtnLogin> Login</BtnLogin>
      </FormLogin>

      <FormLogin>

        <TituloLogin> Cadastro Admin</TituloLogin>

        <LabelLogin > Email: </LabelLogin>
        <InputLogin type="text" value={emailAdmin} onChange={(e) => setEmailAdmin(e.target.value)} />

        <LabelLogin> Nome: </LabelLogin>
        <InputLogin type="text" value={nomeAdmin} onChange={(e) => setNomeAdmin(e.target.value)} />

        <BtnLogin onClick={handleCadastroAdmin}> Cadastrar </BtnLogin>
        {errorCadAdmin && <StyledError>{errorCadAdmin}</StyledError>}
        {successCadAdmin && <StyledSuccess>{successCadAdmin}</StyledSuccess>}

      </FormLogin>

    </ContainerLogin>
  )
}

export default MinhaConta