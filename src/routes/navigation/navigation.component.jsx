import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import '../navigation/navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import SignIn from "../authentication/authentication.component";


const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo/>
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop' >
                        Shop
                    </Link>
                    <Link className="nav-link" to='/authentication' >
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}


export default Navigation;