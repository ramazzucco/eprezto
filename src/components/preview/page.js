import React from "react";

export default function page(props) {
    return (
        <div className="col-8 d-flex justify-content-center align-items-center p-4">
            {!props.preview.length ? (
                <div className="border border-primary rounded shadow p-5">
                    <div className="d-flex align-items-center justify-content-center col-12 bg-primary px-4 py-2 mb-3 rounded" style={{fontSize: '2rem'}}>
                        <p className="mr-4 mb-0">{props.preview.Compañía}</p>
                        <p className="mb-0">$ {props.preview.Precio}</p>
                    </div>
                    <div className="p-3">
                        <p>
                            Sin impuestos: ${" "}
                            {props.preview.insurance_price_without_tax}
                        </p>
                        <p>Por mes: $ {props.preview.monthly_price}</p>
                        <p>Descuento: {props.preview.descuento}</p>
                    </div>
                    <div className="coberturas border rounded mb-3">
                        <p className='h5 mb-0 text-light bg-primary rounded p-1'>Coberturas</p>
                        <table class="table table-sm">
                            <thead>
                                <tr className='text-primary'>
                                    <th scope="col">#</th>
                                    <th scope="col">lesiones_corporales</th>
                                    <th scope="col">danos_propiedad</th>
                                    <th scope="col">gastos_medicos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <th scope="row">persona</th>
                                    <td>$ {props.preview.coberturas.lesiones_corporales.persona}</td>
                                    <td>$ {props.preview.coberturas.danos_propiedad.persona}</td>
                                    <td>$ {props.preview.coberturas.gastos_medicos.persona}</td>
                                </tr>
                                <tr className='text-center'>
                                    <th scope="row">accidente</th>
                                    <td>$ {props.preview.coberturas.lesiones_corporales.accidente}</td>
                                    <td>$ {props.preview.coberturas.danos_propiedad.accidente}</td>
                                    <td>$ {props.preview.coberturas.gastos_medicos.accidente}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="beneficioss border rounded mb-3">
                        <p className='h5 mb-0 text-light bg-primary rounded p-1'>Beneficios</p>
                        <table class="table table-sm">
                            <thead className='text-primary'>
                                <tr>
                                    <th scope="col">Items</th>
                                    <th scope="col" className='text-center'>disponible</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ambulancia</th>
                                    <td className='text-center'>
                                        {props.preview.beneficiosicons.ambulancia ? <p className='mb-0'>&#10004;</p> : <p className='mb-0'>&#10006;</p>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">asistenci vial</th>
                                    <td className='text-center'>
                                        {props.preview.beneficiosicons.asistencia_vial ? <p className='mb-0'>&#10004;</p> : <p className='mb-0'>&#10006;</p>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">grua</th>
                                    <td className='text-center'>
                                        {props.preview.beneficiosicons.grua ? <p className='mb-0'>&#10004;</p> : <p className='mb-0'>&#10006;</p>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">revisado gratis</th>
                                    <td className='text-center'>
                                        {props.preview.beneficiosicons.revisado_gratis ? <p className='mb-0'>&#10004;</p> : <p className='mb-0'>&#10006;</p>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">asistencia legal</th>
                                    <td className='text-center'>
                                        {props.preview.beneficiosicons.asistencia_legal ? <p className='mb-0'>&#10004;</p> : <p className='mb-0'>&#10006;</p>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>No ha seleccionado ninguna poliza!</p>
            )}
        </div>
    );
}
