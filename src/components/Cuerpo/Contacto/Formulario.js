import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  .err{ border: 1.5px solid #d93025; }
  
  .submit {
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
  .notValid{
    background: ${colors.bgGris2};
    color: ${colors.bgGris4};
    cursor: not-allowed;
    :hover {
      background: ${colors.bgGris2};
    }
  }
  .submited{
    background: ${colors.bgGris2};
    color: ${colors.bgGris4};
    cursor: default;
    :hover {
      background: ${colors.bgGris2};
    }
  }
`

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
  i, label {
    text-align: center;
    color: ${colors.bgGris2};
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
`

const Input = styled.input`
  border: none;
  font-family: ${fonts.txtFamily1};
  outline: none;
  flex: 6 0;
`

const Text = styled.textarea`
  border: none;
  font-family: ${fonts.txtFamily1};
  outline: none;
  flex: 6 0;
  resize: none;
`

export default function Formulario() {
  const { register, handleSubmit, errors, formState  } = useForm({ mode: 'onChange' })
  const onSubmit = data => console.log(data)
  const { isValid, isSubmitted } = formState

  const submitButton = () => {
    if(isSubmitted){
      return ( <Input id="submit" name="submit" type="submit" className="submit submited" value="Mensaje Enviado" disabled/> )
    }
    else {
      if(isValid){
        return ( <Input id="submit" name="submit" type="submit" className="submit" value="Enviar Mensaje"/> )
      }
      else{
        return ( <Input id="submit" name="submit" type="submit" className="submit notValid" value="Campos Incompletos" disabled/> )
      }
    }
  }

  return (
    <Form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Caja className={errors.name? "err":""}>
        <i className="fas fa-user"></i>
        <label htmlFor="name">Nombre:</label>
        <Input id="name" name="name" placeholder="Ej Igna Garcia" 
          ref={register({ required: true, minLength: 4, maxLength: 50 })} />
      </Caja>

      <Caja className={errors.mail? "err":""}>
        <i className="fas fa-at"></i>
        <label htmlFor="mail">Correo:</label>
        <Input id="mail" name="mail" placeholder="Ej garcia@mail.com" 
          ref={register({ required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ })} />
      </Caja>

      <Caja className={errors.asunt? "err":""}>
        <i className="fas fa-tags"></i>
        <label htmlFor="asunt">Asunto:</label>
        <Input id="asunt" name="asunt" placeholder="Ej Propuesta" 
          ref={register({ required: true, minLength: 4, maxLength: 50 })} />
      </Caja>

      <Caja className={errors.mesaje? "err":""}>
        <i className="fas fa-pen-alt"></i>
        <label htmlFor="mesaje">Mensaje:</label>
        <Text id="mesaje" name="mesaje" rows="6" placeholder="Ej Hola ... (minimo 20 caracteres)" 
          ref={register({ required: true, minLength: 20 })} />
      </Caja>

      { submitButton() }
    </Form>
  );
}
