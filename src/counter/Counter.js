import React from 'react';
import {createStore} from "redux";

const AddNumber = "AddNumber";
const ReduceNumber = "ReduceNumber";
const init = {
    count: 0,
};

function countReducer(state = init, actions){
    switch (actions.type) {
        case AddNumber:
            return {
                ...state,
                count: state.count + parseInt(actions.number, 10),
            };
        case ReduceNumber:
            return {
                ...state,
                count: state.count - parseInt(actions.number, 10),
            };
        default:
            return state;
    }
}

function addNumber(number){
    return {
        type: AddNumber,
        number,
    }
}

function reduceNumber(number){
    return {
        type: ReduceNumber,
        number
    }
}

const store = createStore(countReducer);

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            count: 0,
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count,
            });
        });
    }

    onChangNumber(e){
        this.setState({
            number: e.target.value
        });
    }

    render (){
        const {
            count,
            number
        } = this.state;
        return (
            <div>
                <p>result is: {count}</p>
                <input type="text" value={number} onChange={this.onChangNumber.bind(this)}></input>
                <button type="button" onClick={() => {
                    store.dispatch(addNumber(number))
                }}>+</button>
                <button type="button" onClick={() => {
                    store.dispatch(reduceNumber(number))
                }}>-</button>
            </div>
        );
    }
}
export default Counter;