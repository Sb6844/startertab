import { createQuote, getAllQuotes } from "@/helpers/apiHelpers";
import { Quote, QuoteResponse } from "@/types";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, PopoverCloseButton } from "@chakra-ui/react";
import { useState } from "react";

export default function AddQuoteModalComponent (props: {setPopOverVisibilityFunction: any, reloadData: any})
{
    const [sourceInput, setSourceInput] = useState('');
    const [quoteInput, setQuoteInput] = useState('');

    const submitQuote = async () =>  {
      
        try {
            var newDataEntry: Quote = {
                source: sourceInput,
                context: quoteInput
            }
            await createQuote(newDataEntry);
            setSourceInput('');
            setQuoteInput('');
           const response = await getAllQuotes();
           props.setPopOverVisibilityFunction();
           props.reloadData(response);
        } catch (e) {
            console.error(e);
            setSourceInput('');
            setQuoteInput('');
        }
    }
    return(
        <Box>
            <form>
                <FormControl>
                    <FormLabel>Source</FormLabel>
                    <Input placeholder='Source' value={sourceInput} onChange={(event: any) => {
                        setSourceInput(event.currentTarget.value)
                    }} />
                </FormControl>
                <FormControl>
                    <FormLabel>Quote</FormLabel>
                    <Input placeholder='Quote' value={quoteInput} onChange={(event: any) => {
                        setQuoteInput(event.currentTarget.value)
                    }}/>
                </FormControl>
                <Box display={'flex'} justifyContent="space-between">
                     <Button type="button" onClick={() => submitQuote()}>Submit</Button>
                    <Button type="button" onClick={() => props.setPopOverVisibilityFunction()}>Close</Button>
                </Box>
               
            </form>
        </Box>
    )
}