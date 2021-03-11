import React, { Fragment } from "react"
import './App.css';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Fragment>
					<div className="main-wrapper">
						<Navbar />
						<Route exact path="/" component={HomePage} />
						<div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
							<PrivateRoute exact path="/projects" component={Projects} />
							<PrivateRoute exact path="/about" component={About} />
							<PrivateRoute exact path="/contact-us" component={Contact} />
							<div className="w3-container">
								<img src={require("./assets/images/w3images-map.jpg")} className="w3-image" style={{ width: '100%' }} />
							</div>
						</div>
					</div>
					<Footer />
				</Fragment>
			</Switch>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Fragment>
	);
}

export default App;
