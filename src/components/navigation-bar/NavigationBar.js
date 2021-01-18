import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';

export default function NavigationBar(props) {
    return (
        <div className="navigation-bar">
            {props.routes.map(({ label, path }, key) => {
                return (
                    <div key={key} className="nav-items">
                        <Link to={path}>{label}</Link>
                    </div>
                );
            })}     
        </div>
    );
}