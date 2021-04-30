export interface ISymbol {
    id: string;
    baseCurrency: string;
    quoteCurrency: string;
    quantityIncrement: string;
    tickSize: string;
    takeLiquidityRate: string;
    provideLiquidityRate: string;
    feeCurrency: string;
}

export interface ITicker {
    ask: string;
    bid: string;
    last: string;
    open: string;
    low: string;
    high: string;
    volume: string;
    volumeQuote: string;
    timestamp: Date;
    symbol: string;
}

export interface IQuote {
    ask: string;
    bid: string;
    last: string;
    low: string;
    high: string;
    name?: string;
    id: string;
    ticker?: boolean;
};

export type KeysStoreType = Array<string>;