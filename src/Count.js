import React from 'react';
import { useChannel } from 'use-phoenix-channel';

const countReducer = (state, { event, payload }) => {
  switch(event) {
    case 'increment':
        return state + payload.amount
    case 'decrement':
        return state - payload.amount 
    default:
        return 0
  }

}

const initialState = 0;

const channelName = 'talk:lobby';

const Count = (props) => {
    const [ count , broadcast] = useChannel(channelName, countReducer, initialState);

    return (
        <div>
            <h1>{`This value is count in realtime, in the ${channelName} channel`}</h1>
            { count }
            <button onClick={() => broadcast('increment', {amount: 1})}>Increment</button>
            <button onClick={() => broadcast('decrement', {amount: 1})}>Decrement</button>
        </div>
    )
}

export default Count;
