import {Suspense} from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';

import {routes} from "./routes";
import logo from '../logo.svg';

export const Navigation = () => {
    return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='react-logo'/>
                    <ul>
                        {routes.map(({to,name}) => {
                            return (
                                <li key={to}>
                                    <NavLink className={({isActive}) => isActive ? 'nav-active' : ''}
                                             to={to}>{name}</NavLink>
                                </li>
                            );
                        })
                        }
                    </ul>
                </nav>


                <Routes>

                    {routes.map(({path,component:Component}) => {
                        return (
                            <Route key={path} path={path} element={<Component/>}/>
                        );
                    })
                    }
                    <Route path='/*' element={<Navigate to={routes[0].to} replace/>}/>

                </Routes>

            </div>
        </BrowserRouter>

    </Suspense>
    );
};