import React from 'react';
import './Greetings.css';

const greetingsTranslator = {
    'fr': 'Bonjour',
    'de': 'Hallo',
    'es': 'Hola',
    'en': 'Hello'
}

function Greetings({lang, children}) {
  return (
    <div className='Greetings'>
        {greetingsTranslator[lang]} {children}
    </div>
  )
}

export default Greetings
