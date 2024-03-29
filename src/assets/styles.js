import styled from "styled-components";
import "./fuente.css";
import "./basics.css";
import "./fonts/icons.css";

export const fonts = {
    txtFamily1: "'Ubuntu', sans-serif",
    txtFamily2: "'Oswald', sans-serif",
};

export const colors = {
    bgOscuro: "#373737",
    bgGris1: "#474747",
    bgGris2: "#777777",
    bgGris3: "#bdbdbd",
    bgGris4: "#e0e0e0",
    bgClaro: "#eeeeee",
    bgExtraClaro: "#fafafa",
    detalle1: "#1B998B",
    detalle1Claro: "#20B590",
    detalle1Oscuro: "#158185",
    /*
    verde  
    detalle1: "#1B998B",
    detalle1Claro: "#20B590",
    detalle1Oscuro: "#158185",
    
    verde agua 00acc1

    azul
    detalle1: "#039be5",
    detalle1Claro: "#1FC5FF",
    detalle1Oscuro: "#007AD0",

    naranja
    detalle1: "#fb8c00",
    detalle1Claro: "#ffa726",
    detalle1Oscuro: "#f57c00",
   */
    txtBgOscuro: "#f5f5f5",
    txtBgOscuro2: "#e0e0e0",
    txtBgClaro: "#212121",
    txtBgClaro2: "#424242",
};

const size = {
    mobileS: "0px",
    mobileM: "321px",
    mobileL: "376px",
    tablet: "426px",
    laptop: "769px",
    desktop: "1025px",
    desktopL: "1441px",
};

export const breackpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
};

export const Container = styled.div`
    margin: 0em auto;

    @media ${breackpoints.mobileS} {
        max-width: "360px";
        width: 90%;
    }
    @media ${breackpoints.mobileL} {
        max-width: "400px";
    }
    @media ${breackpoints.tablet} {
        max-width: "720px";
        width: 80%;
    }
    @media ${breackpoints.laptop} {
        max-width: "960px";
    }
    @media ${breackpoints.desktop} {
        max-width: "1280px";
    }
`;

export const Titulo = styled.h2`
    font-family: ${fonts.txtFamily2};
    font-size: 2.5em;
    font-weight: bold;
    color: ${colors.txtBgClaro2 + "df"};
    margin-bottom: 20px;
    a {
        color: ${colors.txtBgClaro2 + "df"};
        text-decoration: underline;
    }
`;

export const Parrafo = styled.p`
    padding: 0.8em;
    font-size: 1.15em;
    font-family: ${fonts.txtFamily1};
    color: ${colors.bgGris2};
    text-align: center;
`;

export const Text = styled.div`
    text-align: center;
    margin: 0.5em auto;
    max-width: 80%;
`;
