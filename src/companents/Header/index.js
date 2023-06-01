import React from 'react';
import logo from '../../img/Logo.svg'
import {NavLink} from "react-router-dom";
import user from '../../img/user.svg'


const Header = () => {
    const burger = (e)=>{
        const b = document.querySelector('.header--burgerAll__burger--1')
        const b2 = document.querySelector('.header--burgerAll__burger--2')
        const b3 = document.querySelector('.header--burgerAll__burger--3')
        const bg = document.querySelector('.bg')
        const bMunu = document.querySelector('.burgerMenu')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
                b2.style.opacity = '0'
            b.style.transform = 'rotate(45deg)'
            b3.style.transform = 'rotate(-45deg)'
            b3.style.margin = '-17px 0 0 0'
            bMunu.style.transform = 'translate(0)'
            bg.style.display = 'block'
        }else {
            e.target.classList.remove('active')
            b2.style.opacity = '1'
            b.style.transform = 'inherit'
            b3.style.transform = 'inherit'
            b3.style.margin = '0'
            bMunu.style.transform = 'translate(100%)'
            bg.style.display = 'none'
        }
    }
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <NavLink to={'/'}>IZDE.KG</NavLink>
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header--menu">
                        <NavLink to={'/buy'}>Buy</NavLink>
                        <NavLink to={'/rent'}>Rent</NavLink>
                        <NavLink to={'/agents'}>Agents</NavLink>
                        <NavLink to={'/reviews'}>Reviews</NavLink>
                    </div>
                    <div className="header--len">
                        <select>
                            <option>English</option>
                            <option>Русский</option>
                        </select>
                        <button className='headerLogin'>Log in</button>
                        <img className='headerUser' src={user} alt=""/>
                    </div>
                    <div onClick={burger} className="header--burgerAll">
                        <div className="header--burgerAll__burger">
                            <p className='header--burgerAll__burger--1'></p>
                            <p className='header--burgerAll__burger--2'></p>
                            <p className='header--burgerAll__burger--3'></p>
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
            <div className="burgerMenu">
                <div className="burgerMenu__a">
                    <NavLink to={'/buy'}>Buy</NavLink>
                    <NavLink to={'/rent'}>Rent</NavLink>
                    <NavLink to={'/agents'}>Agents</NavLink>
                    <NavLink to={'/reviews'}>Reviews</NavLink>
                </div>
                <div className="burgerMenu--leng">
                    <select className='sel'>
                        <option>English</option>
                        <option>Русский</option>
                    </select>
                    <button className='burgerLogin'>Log in</button>
                    <img className='burgerUser' src={user} alt=""/>
                </div>
            </div>
            <div className="bg"></div>
        </div>
    );
};

export default Header;