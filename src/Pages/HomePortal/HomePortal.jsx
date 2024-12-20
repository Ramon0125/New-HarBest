import { Header } from '../PageComponents/Header/Header';
import ModulesCreator from '../../Components/ModulesCreator';
import './HomePortalStyles.css';

export default function HomePortal() {
  
  return (

    <>  

    <Header />

    <div id='ContainerOptions' className='TAC'>
        <h1>Seleccione el modulo</h1>

        <div className="row">

          <ModulesCreator />

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <button className="linkButton">
                  <div className='TAC'>Administradores</div>
                    <div className='TAC'>
                      <span className="label label-success">Último usado</span>
                    </div>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <button className="linkButton">
                  <div className='TAC'>Administradores</div>
                    <div className='TAC'>
                      <span className="label label-success">Último usado</span>
                    </div>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <button className="linkButton">
                  <div className='TAC'>Administradores</div>
                    <div className='TAC'>
                      <span className="label label-success">Último usado</span>
                    </div>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <button className="linkButton">
                  <div className='TAC'>Administradores</div>
                    <div className='TAC'>
                      <span className="label label-success">Último usado</span>
                    </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        
    </div>
    
    </>
  );
}
