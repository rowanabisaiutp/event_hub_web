import { Fragment } from "react";
import Header from "../componentes/header";
import Escenario2 from "./Esceario2";
import Symbology from "../componentes/symbology";

const AppScenary2 = () => {
    return (
        <Fragment>
            <Header />
            <div className="main-container">
                <div className="content-container">
                    <div className="left-column">
                        <Escenario2 />
                    </div>
                    <div className="right-column">
                        <Symbology/>
                    </div>
                </div>
            </div>
            <button type="button" class="btn b-rigth"  style={{transform: 'translateY(80%)'}}>Continuar</button>
        </Fragment>
    );
}

export default AppScenary2;