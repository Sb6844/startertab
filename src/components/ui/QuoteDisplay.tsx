import { Quote, QuoteResponse } from "@/types";
import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Text } from '@chakra-ui/react'
import AddQuoteModalComponent from "./AddQuoteModal";
import UpdateQuoteModalComponent from "./UpdateQuoteModal";
import axios from 'axios'
import { getAllQuotes } from "@/helpers/apiHelpers";


export default function QuoteDisplayComponent() {


    const [popOverVisibility, setPopOverVisibility] = useState(false);

    const [updatePopOverVisibility, setupdatePopOverVisibility] = useState(false);

    const [quoteMessage, setQuoteMessage] = useState<Quote>();


    const getRandomQuote = (quoteDataResults: Quote[]): Quote => {
        return quoteDataResults[Math.floor(Math.random()*quoteDataResults.length)];
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const results = await getAllQuotes();
                setQuoteMessage(getRandomQuote(results));
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);


    const setAddQuotePopOverVisibilityFunction = () => {
        setPopOverVisibility(!popOverVisibility);
    }

    const setUpdateQuotePopOverVisibilityFunction = () => {
        setupdatePopOverVisibility(!updatePopOverVisibility);
    }


    const reloadQuoteData = (data: any) => {
        setQuoteMessage(getRandomQuote(data));
    }

    return (
        <Center w={'100%'} >
            <Card w={'1000px'}>
        
                <CardHeader>
                    <Heading size='2xl'>{quoteMessage?.source}</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Text fontSize={'2xl'}>{quoteMessage?.context}</Text>
                    </Box>
                    </Stack>
                </CardBody>
                <Box  display="flex" alignItems="center" justifyContent="space-evenly">
            <Popover isOpen={popOverVisibility}>
                <PopoverTrigger>
                    <Button onClick={setAddQuotePopOverVisibilityFunction}>Add Quote</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <AddQuoteModalComponent setPopOverVisibilityFunction = {setAddQuotePopOverVisibilityFunction} reloadData= {reloadQuoteData}></AddQuoteModalComponent>
                </PopoverContent>
            </Popover>
            <Popover isOpen={updatePopOverVisibility}>
                <PopoverTrigger>
                    <Button onClick={setUpdateQuotePopOverVisibilityFunction}>Update Quote</Button>
                </PopoverTrigger>
                <PopoverContent>
                    { quoteMessage ? <UpdateQuoteModalComponent quoteData= {quoteMessage} setPopOverVisibilityFunction = {setUpdateQuotePopOverVisibilityFunction} reloadData= {reloadQuoteData}></UpdateQuoteModalComponent>: <h1>ERROR</h1>}
                </PopoverContent>
            </Popover>
            </Box>
                </Card>
            </Center>
    )
}