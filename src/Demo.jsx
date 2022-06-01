import React from 'react';
import front from './images/front.jpeg'
import back from './images/back.jpeg'

import { CardContainer, Front, Back, Card, VerticalBack } from './FlipCards';
export default function Demo(){
    return (
        <div style={{
                padding: '10px',
                backgroundColor: 'black',
                width: '95vw',
                height: '100vh',
            }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <CardContainer margin={4}>
                    <Card >
                        <Front background={`url(${front}) no-repeat center/cover`}>
                            <p style={{color:'white', fontWeight: 'bold'}}>Horizontal Click Front</p>
                        </Front>
                        <Back background={`url(${back}) no-repeat center/cover`}>
                            <p style={{color:'black', fontWeight: 'bold'}}>Horizontal Click Back</p>
                        </Back>
                    </Card>
                </CardContainer>

                <CardContainer margin={4}>
                    <Card hover>
                        <Front background={`url(${front}) no-repeat center/cover`}>
                            <p style={{color:'white', fontWeight: 'bold'}}>Horizontal Hover Front</p>
                        </Front>
                        <Back background={`url(${back}) no-repeat center/cover`}>
                            <p style={{color:'black', fontWeight: 'bold'}}>Horizontal Hover Back</p>
                        </Back>
                    </Card>
                </CardContainer>
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <CardContainer margin={4}>
                    <Card vertical>
                        <Front background={`url(${front}) no-repeat center/cover`}>
                            <p style={{color:'white', fontWeight: 'bold'}}>Vertical Click Front</p>
                        </Front>
                        <VerticalBack background={`url(${back}) no-repeat center/cover`}>
                            <p style={{color:'black', fontWeight: 'bold'}}>Vertical Click Back</p>
                        </VerticalBack>
                    </Card>
                </CardContainer>

                <CardContainer margin={4}>
                    <Card hover vertical>
                        <Front background={`url(${front}) no-repeat center/cover`}>
                            <p style={{color:'white', fontWeight: 'bold'}}>Vertical Hover Front</p>
                        </Front>
                        <VerticalBack background={`url(${back}) no-repeat center/cover`}>
                            <p style={{color:'black', fontWeight: 'bold'}}>Vertical Hover Back</p>
                        </VerticalBack>
                    </Card>
                </CardContainer>
            </div>
        </div>
    )
}
