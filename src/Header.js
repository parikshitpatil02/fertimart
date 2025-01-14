import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { auth } from './firebase';
import fertimartLogoWhite from './assets/fertimart-logo-white.png'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/" >
                <img className='header__logo' src={fertimartLogoWhite}>
                </img>

            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Orders</span>
                    <span className='header__optionLineTwo'>& Returns</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout" >
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketCount '>{basket?.length}</span> 
                    </div>
                </Link>
            </div>

        </div>

    )
}

export default Header