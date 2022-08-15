import Header from './Header';
import Navbar from './Navbar';

import './styles/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <Navbar />
            <div className="children-content">
                { children }
            </div>
        </div>
    );
};

export default Layout;