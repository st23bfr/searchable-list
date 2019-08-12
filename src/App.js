import React from 'react';
import './App.css';

const THINGS = [
	{
		id: 1,
		author: 'Mitch',
		message: 'hello there!',
		img:'any img here'
	},
	{
		id: 2,
		author: 'Sara',
		message: 'hello there!',
		img:'any img here'
	},
	{
		id: 3,
		author: 'Ann',
		message: 'hello there!',
		img:'any img here'
	},
	{
		id: 4,
		author: 'Peter',
		message: 'hello there!',
		img:'any img here'
	},
	{
		id: 5,
		author: 'Else',
		message: 'hello there!',
		img:'any img here'
	}
]

function App() {
	return (
		<div className="App">
			<ul>
				{THINGS.map( e => {return <li key={e.id.toString()}>{e.author}</li>})}
			</ul>
		</div>
	);
}

export default App;
