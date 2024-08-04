import { Fragment } from "react";
import Header from "../componentes/header";
import Escenario1 from "./Escenario1";
import Symbology from "../componentes/symbology";

const AppScenary1 = () => {
    return (
        <Fragment>
            <Header />
            <div className="main-container">
                <div className="content-container">
                    <div className="left-column" style={{display: "flex"}}>
                        <Escenario1 />
                    </div>
                    <div className="right-column">
                        <Symbology/>
                    </div>
                </div>
            </div>
            <button type="button" class="btn b-rigth" style={{transform: 'translateY(50%)'}}>Continuar</button>
        </Fragment>
    );
}

export default AppScenary1;