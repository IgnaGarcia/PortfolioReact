import React from "react";
import styled from "styled-components";

import { colors, fonts, breackpoints } from "../../../assets/styles";

const Form = styled.form`
  font-family: ${fonts.txtFamily1};
  margin: auto;
  text-align: center;

  @media ${breackpoints.mobileS} {
    width: 100%;
  }
  @media ${breackpoints.tablet} {
    width: 75%;
    padding: 1em;
  }
  @media ${breackpoints.laptop} {
    width: 65%;
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
  return (
    <Form autocomplete="off">
      <Caja>
        <i className="fas fa-user"></i>
        <label htmlFor="nombre">Nombre:</label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Ej Igna Garcia"
          required
        />
      </Caja>
      <Caja>
        <i className="fas fa-at"></i>
        <label htmlFor="mail">Correo:</label>
        <Input
          id="mail"
          name="mail"
          type="email"
          placeholder="Ej garcia@mail.com"
          required
        />
      </Caja>
      <Caja>
        <i className="fas fa-tags"></i>
        <label htmlFor="asunto">Asunto:</label>
        <Input id="asunto" name="asunto" placeholder="Ej Propuesta" required />
      </Caja>
      <Caja>
        <i className="fas fa-pen-alt"></i>
        <label htmlFor="mensaje">Mensaje:</label>
        <Text
          id="mensaje"
          name="mensaje"
          rows="6"
          placeholder="Ej Hola ..."
          required
        />
      </Caja>
      <Input id="subir" name="subir" type="submit" value="Enviar Mensaje" />
    </Form>
  );
}
