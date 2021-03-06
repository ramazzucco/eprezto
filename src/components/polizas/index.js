import React, { Component } from "react";
import { connect } from "react-redux";
import { polizas } from "../../database/polizas";
import Page from "./page";
import findCurrentItem from "../../redux/actions/findCurrentItem";

class Polizas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
        };
        this.onClick = this.onClick.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    onClick(e) {
        console.log(e.target)
        const inputs = document.querySelectorAll('.list .option');

        inputs.forEach( input => {
            if(input.lastChild.value !== e.target.value) input.lastChild.checked = false;
        })

        this.setState({ id: Number(e.target.value) });

        this.props.findCurrentItem(Number(e.target.value));
    }

    sortByPrice(a,b) {
        if (a.Precio > b.Precio) {
            return 1;
        }
        if (a.Precio < b.Precio) {
            return -1;
        }
        return 0;
    }

    render() {
        const { currentItem } = this.props;
        const { id } = this.state;

        return (
            <Page
                polizas={polizas.sort((a,b) => this.sortByPrice(a,b))}
                preview={currentItem}
                id={id}
                onClick={this.onClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        findCurrentItem: (id) => dispatch(findCurrentItem(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polizas);
