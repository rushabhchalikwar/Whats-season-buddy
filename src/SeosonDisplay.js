import './SeosonDisplay.css'
import React from 'react'

const getSeason = (lat , month) => {
    if(month >= 3 && month <= 8){
        return lat > 0 ? 'summer' : 'winter'
    } 
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeosonDisplay = (props) => {
    const season = getSeason(props.lat , new Date().getMonth());
    const text = season === 'winter' ? 'Its chilly' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun'

    return( 
        <div className = { `season-display ${ season }` }> 
            <i className = { icon + ' icon massive icon-left'} ></i>
            <h2> { text } </h2>
            <i className = { icon + ' icon massive icon-right'} ></i>
        </div>
    )
}

export default SeosonDisplay;