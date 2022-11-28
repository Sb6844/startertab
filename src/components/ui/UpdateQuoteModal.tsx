import { getAllQuotes, updateQuote } from "@/helpers/apiHelpers";
import { Quote } from "@/types";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function UpdateQuoteModalComponent (props: {quoteData: Quote, setPopOverVisibilityFunction: any, reloadData: any})
{
    const [sourceInput, setSourceInput] = useState(props.quoteData?.source);
    const [quoteId, _] = useState(props.quoteData?.id);
    const [quoteInput, setQuoteInput] = useState(props.quoteData?.context);

    const updateQuoteClick = async () =>  {
        try {
            var newDataEntry: Quote = {
                id: quoteId,
                source: sourceInput,
                context: quoteInput
            }
            await updateQuote(newDataEntry);
            var results = await getAllQuotes();
           props.setPopOverVisibilityFunction();
           props.reloadData(results);

        } catch (e) {
            console.error(e);
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
                     <Button type="button" onClick={() => updateQuoteClick()}>Update</Button>
                    <Button type="button" onClick={() => props.setPopOverVisibilityFunction()}>Close</Button>
                </Box>
               
            </form>
        </Box>
    )
}