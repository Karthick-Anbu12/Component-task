import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-body">
                <div className="card-header bg-white text text-secondary">
                    <h4 className="my-0 font-weight-normal">{props.amt == 0 && "FREE"}{props.amt == "9" && "PLUS"}{props.amt == "49" && "PRO"}</h4>
                </div>
                <h1 className="card-title pricing-card-title">${props.amt}<small class="text-muted">/ Month</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li className="mb-2"><FontAwesomeIcon icon={faCheck}/> Single User</li>
                    <li className="mb-2"><FontAwesomeIcon icon={faCheck}/> 50GB storage</li>
                    <li className="mb-2"><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects</li>
                    <li className="mb-2"><FontAwesomeIcon icon={faCheck}/> Community Access</li>
                    <li className={`mb-2 ${props.amt == "0" && "opacity-50"} `}>{props.amt==0 && <FontAwesomeIcon icon={faXmark} />}{props.amt==9 && <FontAwesomeIcon icon={faCheck}/>}{props.amt==49 && <FontAwesomeIcon icon={faCheck}/>} Unlimited Private Projects</li>
                    <li className={`mb-2 ${props.amt=="0" && "opacity-50"}`}>{props.amt==0 && <FontAwesomeIcon icon={faXmark} />}{props.amt==9 && <FontAwesomeIcon icon={faCheck}/>}{props.amt==49 && <FontAwesomeIcon icon={faCheck}/>} Dedicated Phone Support</li>
                    <li className={`mb-2 ${props.amt=="0" && "opacity-50"}`}>{props.amt==0 && <FontAwesomeIcon icon={faXmark} />}{props.amt==9 && <FontAwesomeIcon icon={faCheck} />}{props.amt==49 && <FontAwesomeIcon icon={faCheck}/>} Free Subdomine</li>
                    <li className={`mb-2 ${props.amt=="0" && "opacity-50"} ${props.amt=="9" && "opacity-50"}`}>{props.amt==0 && <FontAwesomeIcon icon={faXmark} />}{props.amt==9 && <FontAwesomeIcon icon={faXmark} />}{props.amt==49 && <FontAwesomeIcon icon={faCheck}/>} Monthly Status Reports</li>
                </ul> 
                <button type="button" className="btn btn-lg btn-primary ">Button</button>
            </div>

        </div>
    )
}

export default Card
