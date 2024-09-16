import React from 'react';
import './Imagelink.css';

const Imagelink = ({inputChange , buttonClick}) =>{
    return (
        <div>
            
            <div className='center form br4 fatcat55'>
                <div className=' center pa4 br3 '>
                    <input 
                        className='f4 pa2 w-70 center ' 
                        type='text' 
                        onChange={inputChange} 
                    />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple '
                        onClick={buttonClick}
                        >detect
                    </button>
                </div>    
            </div>
        </div>

    )
}

export default Imagelink;