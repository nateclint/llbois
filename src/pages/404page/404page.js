import React from 'react'
import './404page.css'
const otto = '/assets/404/otto.png'
const sat = '/assets/404/sat.png'
const moon = '/assets/404/moon_pink.png'
const bone = '/assets/404/bone.png'
const planet = '/assets/404/saturn_purple.png'
const pBlue = '/assets/404/planet_blue.png'
const pYell = '/assets/404/smallplanet_yellow.png'

function errPage(props) {

    return (
        <React.Fragment>
            <div className='err-page'>
                <div className='err-body'>
                    <h5 className='lyw'>Lost your way ?</h5>
                    <div className='img-container'>
                        <img className='errIMG otto' alt='otto' src={otto} />
                        <img className='errIMG sat' alt='sat' src={sat} />
                        <img className='errIMG moon' alt='moon' src={moon} />
                        <img className='errIMG bone' alt='bone' src={bone} />
                        <img className='errIMG planet' alt='planet' src={planet} />
                        <img className='errIMG pBlue' alt='planet_blue' src={pBlue} />
                        <img className='errIMG pYell' alt='splanet_yellow' src={pYell} />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}

export default errPage
