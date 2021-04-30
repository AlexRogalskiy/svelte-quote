import { unsubscribe } from 'api/ws';
import { writable } from 'svelte/store';
import type { IQuote, ITicker } from 'types';

type StateType = Record<string, IQuote>;

const initialState = <StateType>{};

const quote = writable(initialState);

const updateStore = (payload: ITicker) => {
    const quoteObj = {
        id: payload.symbol,
        low: payload.low,
        high: payload.high,
        last: payload.last,
        bid: payload.bid,
        ask: payload.ask,
        ticker: true
    };
    // console.log('quoteObj: ', quoteObj);
    quote.update((state): StateType => {
        const currentQuote = state[payload.symbol];

        quoteObj.name = currentQuote.name;
        state[payload.symbol] = quoteObj;
        return state;
    });
};

const setQuotes = (payload: StateType) => {
    quote.set(payload);
};

const unsubscribeQuote = (payload: string) => {
    quote.update((state): StateType => {
        state[payload].ticker = false;
        return state;
    })
};
export default { subscribe: quote.subscribe, updateStore, setQuotes, unsubscribeQuote }