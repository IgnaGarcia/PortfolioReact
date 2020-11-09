import React, { useState } from "react";
import styled from "styled-components";

import { colors, fonts, breackpoints } from "../../../assets/styles";

const Form = styled.form`
  font-family: ${fonts.txtFamily1};
  text-align: center;

  @media ${breackpoints.mobileS} {
    width: 100%;
    margin: auto;
  }
  @media ${breackpoints.tablet} {
    width: 75%;
    padding: 1em;
  }
  @media ${breackpoints.laptop} {
    flex: 0 1 60%;
    margin: 0px;
    padding: 0px;
  }
  @media ${breackpoints.desktop}{
    flex: 0 1 65%;
    padding: 1em;
  }

  #subir {
    background: ${colors.detalle1};
    color: ${colors.bgOscuro};
    padding: 0.75em;
    font-weight: 600;

    box-shadow: -2px 3px 3px rgba(20, 20, 20, 0.25);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s;
    :hover {
      background: ${colors.detalle1Oscuro};
    }
    :focus {
      color: ${colors.detalle1Claro};
      background: ${colors.bgGris2};
      border-bottom: none;
    }

    @media ${breackpoints.mobileS} {
      width: 100%;
      margin: 0.5em 0em 1.5em 0em;
    }
    @media ${breackpoints.laptop} {
      width: 30%;
      margin: 0.5em 0em;
      float: right;
    }
  }
`;

const Caja = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding: 0.5em;
  margin: 0.5em 0em;
  text-align: left;

  background: ${colors.bgClaro};
  box-shadow: -2px 3px 3px rgba(20, 20, 20, 0.25);
  border-radius: 10px;
  border: 1px solid #fff;
  i {
    text-align: center;
    color: ${colors.bgGris3};
    flex: 1 0;
  }
  label {
    text-align: center;
    flex: 1 0;
  }
  input,
  textarea {
    background: inherit;
  }
  @media ${breackpoints.mobileS} {
    label {
      display: none;
    }
  }
  @media ${breackpoints.mobileM} {
    label {
      display: block;
    }
  } ;
`;

const Input = styled.input`
  border: none;
  font-family: ${fonts.txtFamily1};
  outline: none;
  flex: 6 0;
  :focus {
    border-bottom: 1px solid ${colors.txtBgClaro2};
  }
`;

const Text = styled.textarea`
  border: none;
  font-family: ${fonts.txtFamily1};

  outline: none;
  flex: 6 0;
  resize: none;
  :focus {
    border-bottom: 1px solid ${colors.txtBgClaro2};
  }
`;

export default function Formulario() {
  const [ error, setError] = useState({
    name: false,
    mail: false,
    asunt: false,
    mesaje: false
  })
  const [ send, setSend ] = useState(false)
  const [ contact, setContact] = useState({
    name: '',
    mail: '',
    asunt: '',
    mesaje: ''
  })
  
  const handleChange = e =>{
    setContact(
      [e.target.name] = e.target.value
    )
  }

  const validForm = () => {
    let validInputs = true
    let error = {'name': false, 'asunt': false, 'mesaje': false, 'mail': false}

    if(!contact['name']){
      validInputs = false
      error['name'] = true
    }
    else error['name'] = false


    if(!contact['asunt']){
      validInputs = false
      error['asunt'] = true
    }
    else error['asunt'] = false

    if(!contact['mesaje']){
      validInputs = false
      error['mesaje'] = true
    }
    else error['mesaje'] = false

    if(typeof contact['mail'] !== "undefined"){
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)    
      if(!pattern.test(contact['mail'])){
        validInputs = false    
        error['mail'] = true
      }
      else error['mail'] = false
    }
    
    setError(error)
    console.log(error)
    console.log(contact)
    return validInputs
  }

  const sendMail = e => {
    e.preventDefault();
    if(validForm()){
      setSend(true)
      //algo que verifique que se envio
    }
  }

  return (
    <Form autocomplete="off" onSubmit={sendMail}>
      <Caja>
        <i className="fas fa-user"></i>
        <label htmlFor="nombre">Nombre:</label>
        <Input id="nombre" name="nombre" placeholder="Ej Igna Garcia" 
          onChange={handleChange} value={contact['name']}/>
      </Caja>
      <Caja>
        <i className="fas fa-at"></i>
        <label htmlFor="mail">Correo:</label>
        <Input id="mail" name="mail" placeholder="Ej garcia@mail.com" 
          onChange={handleChange} value={contact['mail']}/>
      </Caja>
      <Caja>
        <i className="fas fa-tags"></i>
        <label htmlFor="asunto">Asunto:</label>
        <Input id="asunto" name="asunto" placeholder="Ej Propuesta" 
          onChange={handleChange} value={contact['asunt']}/>
      </Caja>
      <Caja>
        <i className="fas fa-pen-alt"></i>
        <label htmlFor="mensaje">Mensaje:</label>
        <Text id="mensaje" name="mensaje" rows="6" placeholder="Ej Hola ..." 
          onChange={handleChange} value={contact['mesaje']}/>
      </Caja>
      <Input id="subir" name="subir" type="submit" value={send? "Mensaje Enviado" : "Enviar Mensaje"} />
    </Form>
  );
}
