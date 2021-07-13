import React from "react";

export default function page(props) {
    return (
        <div className="list col-4 d-flex flex-column justify-content-start align-items-start p-4">
            {props.polizas.map((poliza) => {
                return (
                    <div className="option w-75 d-flex bg-info rounded text-light py-1 px-4 mb-1">
                        <label htmlFor={`poliza${poliza.id}`}>poliza N° {poliza.id} - Detalles</label>
                        <input
                            id={`poliza${poliza.id}`}
                            type='radio'
                            name={`poliza${poliza.id}`}
                            onClick={props.onClick}
                            value={poliza.id}
                            className='ml-auto'
                        />
                    </div>
                );
            })}
        </div>
    );
}
