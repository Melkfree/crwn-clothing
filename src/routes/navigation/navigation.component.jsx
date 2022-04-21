import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import '../navigation/navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import SignIn from "../sign-in/sign-in.component";


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
                    <Link className="nav-link" to='/sign-in' >
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}


export default Navigation;