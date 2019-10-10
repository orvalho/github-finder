import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../App.css';
import UsersState from '../context/github/users/UsersState';
import ReposState from '../context/github/repos/ReposState';
import AlertState from '../context/alert/AlertState';
import Navbar from './layout/Navbar';
import Alert from './layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const App = () => (
	<UsersState>
		<ReposState>
			<AlertState>
				<Router>
					<div className='app ui container'>
						<Navbar />
						<Alert />
						<div className='wrapper'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={Detail} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</ReposState>
	</UsersState>
);

export default App;
