import React, { Component } from 'react'
import HealthGauge from './healthGauge/HealthGauge'
import WorkGauge from './workGauge/WorkGauge'
import LoveGauge from './loveGauge/LoveGauge'
import PlayGauge from './playGauge/PlayGauge'

class Dashboard extends Component{
   
    render(){
        return(
            <div className='dashboard'>
                <div className='dashboard-instructions'>
                    <h1>Weekly Reflexions</h1>
                    <h2>Level</h2>
                    <p>Select a number from 0 - 4 with 0 being empty and 4 being completely full.</p>
                    <h2>Assessment</h2>
                    <p>Think about where you are now and write a short assessment.</p>
                </div>
                <div className='dashboard-gauges'>
                <HealthGauge />
                <WorkGauge />
                <LoveGauge />
                <PlayGauge/>
                </div>
            </div>
        )
    }
}

export default Dashboard