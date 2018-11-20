/* example */
console.log('Pasileido')

for (var i = 0; i < 2; i++) {
	console.log('Pasileido ' + i)
}

/* Hello World */
const component = <h1>Hello, world</h1>;

ReactDOM.render(
	component,
	document.getElementById('root')
);

/*
// React CreateClass Test 
class HelloComponent extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}
ReactDOM.render(
	<HelloComponent name="Jane"/>,
	document.getElementById('root')
);
*/

/* React PropTypes */
class HelloComponent extends React.Component {
	render() {
		return (<div>Hello {this.props.name}</div>);
	}
}
HelloComponent.propTypes = {
	name: PropTypes.string.isRequired,
	name: PropTypes.number.isRequired

	/*
	declaring one variable two times while changing it's type in the second the following error is given:
	Failed prop type: Invalid prop `name` of type `string` supplied to `HelloComponent`, expected `number`.
    in HelloComponent
    */

}
ReactDOM.render(
	(<HelloComponent name="Jane"/>),

	/*
	but changing the value of name from "Jane" to a number, 555, it gives me syntax error
	*/

	document.getElementById('root')
);

*i also need to check how to change :name to :surname
*i also need to check how to change =name to =vardas