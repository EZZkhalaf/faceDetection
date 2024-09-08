import React from  'react';

const Rank = ({name , entries}) =>{
    
    return (
        <div>
            <div className='f2'>
                {`${name} your entries are : ${entries}`}
            </div>
            
        </div>

    )

}

export default Rank ;