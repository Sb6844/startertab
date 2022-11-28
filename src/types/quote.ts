export interface QuoteResponse {
    message: string;
    data: {data: Quote[];}
}


export interface Quote {
    id?: string;
    context: string;
    source: string;
}