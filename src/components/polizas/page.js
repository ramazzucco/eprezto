import React from "react";
import List from '../list/page';
import Preview from '../preview/page';
import '../../App.css';

export default function Page(props) {

    const {
        id,
        polizas,
        onClick,
        preview,
    } = props;

    return (
        <div className="polizas d-flex flex-wrap col-12">
            <List
                id={id}
                polizas={polizas}
                onClick={onClick}
            />
            <Preview
                preview={preview}
            />
        </div>
    );
}
