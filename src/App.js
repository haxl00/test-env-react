import './App.css';

function App() {
	
	const { REACT_APP_IMMUTABLE } = process.env;
	const { REACT_APP_MUTABLE } = process.env;
	
	return (
		<div className="App container">
			<h1>This app (maked with <a href="https://create-react-app.dev/" rel="noreferrer" target="_blank">'create-react-app'</a>) use 3 .env files</h1>
			<hr />
			<code style={{'fontSize': '1.5em'}}>
				<strong>.env</strong><br />
				<p className="mx-4">
					REACT_APP_IMMUTABLE="Immutable var"<br />
					REACT_APP_MUTABLE="Mutable var"
				</p>
			</code>
			<hr />
			<code style={{'fontSize': '1.5em'}}>
				<strong>.env.development</strong><br />
				<p className="mx-4">
					REACT_APP_MUTABLE="Mutable var DEVELOP"
				</p>
			</code>
			<hr />
			<code style={{'fontSize': '1.5em'}}>
				<strong>.env.production</strong><br />
				<p className="mx-4">
					REACT_APP_MUTABLE="Mutable var PROD"
				</p>
			</code>
			<hr />
			<h3>Run app with <code>npm run start</code> and Compile with <code>npm run build</code> and see the difference in this lines of text</h3>
			<h1>Ciao { REACT_APP_IMMUTABLE }</h1>
			<h1>Addio { REACT_APP_MUTABLE }</h1>
			<hr />
			Based on <a href="https://stackoverflow.com/questions/42458434/how-to-set-build-env-variables-when-running-create-react-app-build-script">Stackoverflow thread</a>
		</div>
	);
}

export default App;
