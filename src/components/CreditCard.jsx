import React from 'react';
import visaImg from '../assets/images/visa.png';
import './CreditCard.css';

/* NOTE:
Importing the svg directly is causing an error, after some troubleshooting and trying out 
steps found online that were supposed to help, none of it worked. Only way I managed to use
the picture was to copy it to public folder and use it as a direct static link instead of
importing it.
*/
//import mcImg from '../assets/images/master-card.svg';
const mcImg = '/images/master-card.svg';

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const images = {
        'Visa': visaImg,
        'Master Card': mcImg,
    }
    return (
        <div className='CreditCard' style={{
            backgroundColor: bgColor,
            color: color,
            }}>

            <div>
                <div className="cc-logo">
                    <img src={images[type]} alt={`${type} Logo`} />
                </div>
                <p className='cc-number'>•••• •••• •••• {number.substring(12)}</p>
                <div>
                    <p className='cc-data'><span className='cc-expiration'>Expires {expirationMonth}/{expirationYear}</span><span className='cc-bank'>{bank}</span></p>
                    <p className='cc-data'>{owner}</p>
                </div>

            </div>          
        </div>
    )
}

export default CreditCard