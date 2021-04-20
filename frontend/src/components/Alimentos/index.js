import React from 'react';
import './alimentos.css';
import Table from 'react-bootstrap/Table';

function Alimentos() {
    return (
        <div className="alimentos">
            <h1 className="titulo">LISTA DE ALIMENTOS</h1>
            <div className="tabla">
                <Table responsive="md" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nombre</th>
                            <th>Procedencia</th>
                            <th>Calorias(kcal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr className="alt">
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr className="alt">
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );

}

export default Alimentos;