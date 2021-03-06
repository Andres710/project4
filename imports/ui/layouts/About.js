import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

class About extends React.Component{
  componentDidMount(){
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';
  }
  render(){
    return (
      <div>
      <Navbar/>
      <br/>
      <div className="container testh">
      <div className="container">
            <h3 className="card-title title">
              ¡Toda la informacion sobre hitos Uniandes la encontraras aquí!
            </h3>
            <br/>
            <h5 className="rostext">¿Qué es hitos Uniandes?</h5>
            <p className="card-text">
              Hitos Uniandes es un espacio creado por la Oficina
              de Construcción de Comunidad y   (créditos estudiantes)
              para visibilizar la investigación sobre algunos
              hitos históricos de Uniandes, en los que se ha
              identificado la presencia de distintos miembros
              de la comunidad uniandina y cuyos resultados han
              impactado de manera positiva al país.
              <br/>
              <br/>
              Esta plataforma permite consultar diferentes momentos
              históricos para la Universidad y aportar en la
              construcción de nuevos hitos a partir de los recuerdos,
              las experiencias y la memoria colectiva de los
              miembros de la comunidad uniandina.
            </p>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <Footer/>
      </div>
    );
  }
}

export default About;
