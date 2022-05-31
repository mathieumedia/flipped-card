import './App.css';

import {CardContainer} from './FlipCards'
function App() {
    return (
        <div className="App">
            <div style={{
                padding: '10px',
                backgroundColor: 'red',
                width: '100vw',
                height: '100vh',
            }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <CardContainer />
                    <CardContainer />
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <CardContainer />
                    <CardContainer />
                </div>
            </div>
        </div>
    );
}

export default App;
