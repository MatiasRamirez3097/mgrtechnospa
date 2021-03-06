/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

//import logo from './logo.svg';
//import './App.css';
import HomeLayout from './layout/HomeLayout';
import CfgRoutes from './config/Routes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <HomeLayout>
                <CfgRoutes/>
            </HomeLayout>
        </Router>
    );
}

export default App;