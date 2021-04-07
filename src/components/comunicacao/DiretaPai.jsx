import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return (
        <div>
            <DiretaFilho texto="Ana" numero={20}
                    bool={true}/>
            
            <DiretaFilho texto="Paulo" numero={30}
                    bool={false}/>
        </div>
    )
}