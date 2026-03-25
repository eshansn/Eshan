import React from 'react';
import StaggeredMenu from './StaggeredMenu';
import myLogo from '../assets/ESNW@4x.png';

const Navbar = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
        { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
        { label: 'Projects', ariaLabel: 'View our services', link: '#projects' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
    ];

    const socialItems = [
        { label: 'Behance', link: 'https://www.behance.net/eshannethmina' },
        { label: 'GitHub', link: 'https://github.com/eshansn' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/eshan-nethmina-322b45300/' }
    ];

    return (
        <nav style={{ position: 'fixed', height: '100%' , zIndex: 1000 }}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}

                // --- COLOR SETTINGS ---
                menuButtonColor="#ffffff"       // Color when closed (White)
                openMenuButtonColor="#000000"   // Color when opened (Black)
                accentColor="#000000"           // Ensures the cross/icon is also Black

                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl={myLogo}
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />
        </nav>
    );
};

export default Navbar;