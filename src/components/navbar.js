import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        const { showForm } = this.props;
        return (
            <div className='navbar'>
               <h1 className="header-logo">BoardApp</h1>  
                <nav className="navbar-menu">
                    <button name="ifClickColumn" onClick={showForm} className="navbar-menu-button">Kolon Ekle</button>
                    <button name="ifClickCard" onClick={showForm}  className="navbar-menu-button">Kart Ekle</button>
                </nav>
            </div>
        )
    }
}
