import { Link } from 'react-router-dom';

function Nav() {

    return (
            <div className="navbar flex flex-row justify-between items-center mx-10 py-5 text-black">
                <div className="navbar-title text-2xl sm:text-3xl font-bold text-green-600">
                    <h1><Link to='/'>Sprinkle & Dash</Link></h1>
                </div>
                <div className="navbar-links">
                    <ul className="flex space-x-8 text-xl sm:text-2xl">
                        <li><Link to='/' className="hover:text-green-600 transition duration-200">Home</Link></li>
                        <li><Link to='/random' className="hover:text-green-600 transition duration-200">Random</Link></li>
                    </ul>
                </div>
            </div>
    );
}

export default Nav;