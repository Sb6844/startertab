import { QuoteResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "GET") {
      try {
        console.log('hereerere')
        const quoteData = await getQuote();
        // API sends back a object even when the stock ticker doesn't exist -_-
        if (quoteData === null) {
          return res
            .status(404)
            .send(`Couldn't get a quote`);
        }

        res.status(200).json(quoteData);
       }
      catch (err) {
        res.status(500).json(err);
      }
    }

    if (req.method === "POST") {
      try {
        const quoteData = await createQuote(req);
        if (quoteData === null) {
          return res
            .status(404)
            .send(`Couldn't create quote`);
        }
        res.status(200).json(quoteData);
       }
      catch (err) {
        res.status(500).json(err);
      }
    }
    if (req.method === "PUT") {
      try {
        const quoteData = await updateQuote(req);
        if (quoteData === null) {
          return res
            .status(404)
            .send(`Couldn't create quote`);
        }
        res.status(200).json(quoteData);
       }
      catch (err) {
        res.status(500).json(err);
      }
    }
}

export const getQuote = async (): Promise<QuoteResponse> => {
  try {
        console.log('does this get hit?')
        const res = await fetch(`https://localhost:7160/api/DataEntry`);
        const data = (await res.json()) as QuoteResponse;
        return data;
  } catch (error) {
    console.error(error);
    console.error('???????????????????????????????');
    throw new Error(error as string);
  }
};


export const createQuote = async (requestOptions: NextApiRequest): Promise<QuoteResponse> => {
  try {
        const res = await fetch(
          `https://localhost:7160/api/DataEntry`,
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: { 'Content-Type': 'application/json' },
          }
            
        );
        const data = (await res.json()) as QuoteResponse;
        return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
};


export const updateQuote = async (requestOptions: NextApiRequest): Promise<QuoteResponse> => {
  try {
        const res = await fetch(
          `http://127.0.0.1:7789/quote`,
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: { 'Content-Type': 'application/json' },
          }
            
        );
        const data = (await res.json()) as QuoteResponse;
        return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
};