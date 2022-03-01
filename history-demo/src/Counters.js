import React from 'react';

class Counters extends React.Component {
    static defaultProps = {color: 'orange'}
    constructor(props) {
        super(props);
        this.state = { count: 0, isHiding: false }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        };

        increment() {
            this.setState({ count: this.state.count + 1})
        };

        decrement() {
            this.setState({ count: this.state.count - 1})
        };

        componentDidMount() {
            console.log("COMPONENT MOUNTED!!")
        };

        componentDidUpdate() {
            console.log("UPDATED!!")
        };

        componentWillUnmount() {
            console.log("ABOUT TO GO BYE-BYE!")
        };

        render() {
            console.log("COMPONENT")
            const {color} = this.props;
            const {count} = this.count;
        
            return (
                <div>
                    <h1 style={{ color }}>I AM COUNTER</h1>
                    <h3> Count is: {this.state.count}</h3>
                    <button onClick={this.increment}> Add 1</button>
                    <button onClick={this.decrement}> Subtract 1</button>
                </div>
            );
        };
};
    
export default Counters;