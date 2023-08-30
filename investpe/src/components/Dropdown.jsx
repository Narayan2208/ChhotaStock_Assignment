import React from 'react'
import mutual from '../assets/imge1.png';
import market from '../assets/imge5.png';
import historical from '../assets/imge6.png';
import gold from '../assets/imge3.png';
import fixed from '../assets/imge4.png';
import equity from '../assets/imge2.png';

import './Dropdown.css'

const Dropdown = ({shownav,setshownav}) => {
    
    return (
        <div className='main' style={{position:"absolute", display: shownav?"flex":"none",width:'80%',margin:'auto',background:"white",right:"120px",zIndex:"200",padding:'20px' }}>
            <div className='div-1' >
                <div>
                    <div className='green'>INVESTMENTS</div>
                    <div style={{ display: "flex", justifyContent: 'space-between' ,alignItems:'center'}}>
                       <div> <img className='img'  src={mutual} alt="" /></div>
                        <div>
                            <p className='heading'>Mutual Funds</p>
                            <p className='para'>E2E infrastructure for mutual fund investing</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                       <div> <img className='img' src={equity} alt="" /></div>
                        <div>
                            <p className='heading'>Indian Equity</p>
                            <p className='para'>Ready-made stock baskets with major broker integrations</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <div>  <img className='img' src={gold} alt="" /></div>
                        <div>
                            <p className='heading'>Digital Gold</p>
                            <p className='para'>Allow your users to buy & sell digital gold</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <div> <img className='img' src={fixed} alt="" /></div>
                        <div>
                            <p className='heading'>Fixed Deposits</p>
                            <p className='para'>Book FDs in one-click without opening a bank account</p>
                        </div>
                    </div>

                </div>


            </div>

            <div className='div-2' style={{marginLeft:"-40px"}}>
                <div className='green'>Data</div>
                <div>
                    <div style={{ display: "flex" , justifyContent: 'space-between'  }}>
                        <div><img className='img' src={market} alt="" /></div>
                        <div>
                            <p className='heading'>Market Research</p>
                            <p className='para'>Deep-tech stock research & analysis</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between' ,width:'400px'}}>
                        <div> <img className='img' src={historical} alt="" /></div>
                        <div>
                            <p className='heading'>Historical Performance</p>
                            <p className='para'
                            style={{width:'100%'}}>Multi timeframe historical data for stocks, mutual funds & digital gold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown