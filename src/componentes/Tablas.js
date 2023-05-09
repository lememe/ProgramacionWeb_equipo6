import React, { useState } from 'react';
import "./Tablas.css";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabla(){
    const [elementos1, setElementos1] = useState([
        { materia: "Lenguajes y Automatas 2", clave: "SCD-1016", hora: "15:00 - 16:00", grupo: "C7A" },
        { materia: "Programacion web", clave: "AEB-1055", hora: "14:00 - 15:00", grupo: "C7A" }, 
        { materia: "Taller de investigacion 1", clave: "ACA-0909", hora: "13:00 - 14:00", grupo: "C7A" },
        { materia: "Desarrollo de aplicaciones moviles", clave: "AEB-1011", hora: "17:00 - 18:00", grupo: "C7A" },

        { materia: "Desarrollo de aplicaciones moviles", clave: "AEB-1011", hora: "17:00 - 18:00", grupo: "C7B" },
        { materia: "Programacion web", clave: "AEB-1055", hora: "16:00 - 17:00", grupo: "C7B" },
        { materia: "Lenguajes y Automatas 2", clave: "SCD-1016", hora: "15:00 - 16:00", grupo: "C7B" },
        { materia: "Taller de investigacion 1", clave: "ACA-0909", hora: "13:00 - 14:00", grupo: "C7B" },


    ]);
    const [elementos2, setElementos2] = useState([]);

     // revisa si la materia seleccionada coincide con alguna materia en la tabla de materias seleccionadas
    const agregarElementoT2 = (elemento) => {
        const conflicto = elementos2.some((m) => m.hora === elemento.hora);
        const conflicto2 = elementos2.some((m) => m.materia === elemento.materia);
        if (conflicto) {alert("Materia incompatible"); } 
        else if (conflicto2){alert("Materia ya seleccionada en otro grupo"); }
        // Crea una nueva lista de materias de la tabla de materias disponibles que elimine la materia seleccionada
        else {
          const nuevasMaterias1 = elementos1.filter((m) => m !== elemento);
          setElementos1(nuevasMaterias1);
          setElementos2([...elementos2, elemento]); }
      };
      //elimina elementos de la tabla de materias seleccionadas
      const elimiarElmentoT2 = (elemento) => {
        const newElemento2 = elementos2.filter((m) => m !== elemento);
        setElementos2(newElemento2);
        // Busca si la materia que se eliminó de la tabla de materias disponibles existe en la tabla de materias seleccionadas
        const Elementoexistente = elementos1.some((m) => m.materia === elemento.materia && m.clave === elemento.clave && m.hora === elemento.hora && m.grupo === elemento.grupo);
        if (Elementoexistente) { alert("La materia ya existe en la tabla de seleccion de materias");} 
        // Agrega la materia eliminada de la tabla 2 a la tabla 1
        else { setElementos1([...elementos1, elemento]);}
        };

        return (
            <div className="App">
              
              <div className="tablas">
              <Table striped bordered hover variant="dark">                  
                  <thead>
                  <h2>Materias disponibles </h2>
                    <tr>
                    
                      <th>Materia</th>
                      <th>Clave</th>
                      <th>Hora</th>
                      <th>Grupo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementos1.map((materias, index) => (
                      <tr key={index}>
                        
                        <td>{materias.materia}</td>
                        <td>{materias.clave}</td>
                        <td>{materias.hora}</td>
                        <td>{materias.grupo}</td>
                        <td>
                        
                          <Button variant='danger' onClick={() => agregarElementoT2(materias)}>+</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <table>
                  <thead>
                  <h2>Materias seleccionadas </h2>
                    <tr>
                      <th>Materia</th>
                      <th>Clave</th>
                      <th>Hora</th>
                      <th>Grupo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementos2.map((materias, index) => (
                      <tr key={index}>
                        <td>{materias.materia}</td>
                        <td>{materias.clave}</td>
                        <td>{materias.hora}</td>
                        <td>{materias.grupo}</td>
                        <td>
                          <button onClick={() => elimiarElmentoT2(materias)}>-</button>
                        </td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

     );
     }

export default Tabla;