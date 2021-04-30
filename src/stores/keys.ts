import { writable } from 'svelte/store';
import quote from './quote';
import { subscribe } from 'api/ws';
import type { KeysStoreType } from 'types';

type TSymbol = {
    id: keyof {},
    baseCurrency: string,
    quoteCurrency: string,
};

const initialState = <KeysStoreType>[];

const keysStore = writable(initialState);

const init = (payload: TSymbol[]) => {
    const array = payload.slice(0, 1);
    const { keys, quotes } = payload.reduce((acc, item: TSymbol) => {
        const name = `${item.baseCurrency}/${item.quoteCurrency}`;
        const newQuote = { id: item.id, name: name };
        subscribe(item.id);
        return { keys: [...acc.keys, item.id], quotes: { ...acc.quotes, [item.id]: newQuote } };
    }, { keys: [], quotes: {} });
    keysStore.set(keys);
    quote.setQuotes(quotes);
}
export default { subscribe: keysStore.subscribe, init }