import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();
        this.state = { menuAberto: false };
    }

    abrirMenu = () => {
        this.setState({ menuAberto: true });
    }

    fecharMenu = () => {
        this.setState({ menuAberto: false });
    }

    render() {
        return (
            <header>
                {
                    this.state.menuAberto &&
                    <div className='fechar-menu' onClick={this.fecharMenu} />
                }

                <nav className={`container menu-lateral clearfix ${this.state.menuAberto && 'aberto'}`}>
                    <ul className='row middle-xs'>
                        <li className='col-xs-12 col-sm-4'><a href="#">Opção 1</a></li>
                        <li className='col-xs-12 col-sm-4'><a href="#">Opção 2</a></li>
                        <li className='col-xs-12 col-sm-4'><a href="#">Opção 3</a></li>
                    </ul>
                </nav>
                <button className='abrir-menu' onClick={this.abrirMenu}>Abrir menu</button>
            </header>
        )
    }
}

export default Header;