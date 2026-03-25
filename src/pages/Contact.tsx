import React from 'react';
import { GridScan } from '../components/GridScan.tsx';

const ContactPage = () => {
    return (
        <div id="contact" style={{
            position: 'relative', // This acts as the anchor
            minHeight: '100vh',
            width: '100%',
            color: 'white',
            backgroundColor: '#050505',
            fontFamily: 'sans-serif',
            overflow: 'hidden' // Keeps the grid from spilling out
        }}>

            {/* 1. BACKGROUND LAYER (Changed to absolute) */}
            <div style={{
                position: 'absolute', // Now stays inside this 100vh box
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none' // Ensures you can still click things on top
            }}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            {/* 2. TEXT CONTENT LAYER */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                padding: '20px'
            }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                    SYSTEM CHECK
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#FF9FFC', letterSpacing: '2px' }}>
                    GRIDSCAN SECTION ACTIVE
                </p>

                <div style={{
                    marginTop: '40px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '400px'
                }}>
                    <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                        The grid should now only appear when you scroll down to this section.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;