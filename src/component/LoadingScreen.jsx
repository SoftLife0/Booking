import React from 'react';

function LoadingScreen({ message }) {
    return (
        <div id="loading" style={{ height: '100vh', width: '100vw', display: 'flex', backgroundColor: '#fff', position: 'fixed', top: 0, alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
            <div>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <div className="spinner-border m-5" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only"></span>
                    </div>
                    <h6 style={{ textAlign: 'center' }}>{message}</h6>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
