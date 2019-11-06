import React from 'react';
import Links from './Links';

export default function Intro() {
    return(
        <div>
            <h1 class="name-intro">Heather Zurek</h1>
            <div className="title-intro">
            <p>Software and Support Engineer</p>
            <Links />
            </div>
            <hr/>
        </div>
    );
}