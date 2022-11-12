import { PopularLinksInfo, TileId } from "@/types";
import {ViewIcon } from "@chakra-ui/icons";
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, List, ListIcon, Button, AccordionIcon } from "@chakra-ui/react";
import React from "react";

interface PopularLinksTileProps {
  tileId: TileId;
}

export const PopularLinksTile: React.FC<PopularLinksTileProps> = ({ tileId }) => {
    const links: PopularLinksInfo[] = [
        {
            id: 1,
            url: 'https://mail.google.com/mail/u/0/?tab=wm#inbox',
            label: 'Gmail'
        },
        {
            id: 2,

            url: 'https://docs.google.com/spreadsheets/u/0/',
            label: 'Spreedsheets'
        },
        {
            id: 3,

            url: 'https://docs.google.com/document/u/0/',
            label: 'Docs'
        },
        {
            id: 4,

            url: 'https://mail.yahoo.com/d/folders/1',
            label: 'Yahoo Mail'
        },
        {
            id: 5,
            url: 'https://www.google.com/finance/?tab=me&authuser=0',
            label: 'Finances'
        }
    ]
  const color = `var(--text-color-${tileId})`;
  return (
    <Box p="2" color={color} position="relative">
      <Heading p="2" fontSize="xl" fontWeight="bold">
        Popular Links
      </Heading>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple color={color} >
            <AccordionItem >
                <h2>
                    <AccordionButton border='1px' borderColor='grey.200'>
                        <Box flex='1' textAlign='left' >
                            Personal Links
                        </Box>
                    <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    <List spacing={1}>
                        {
                            links.map((link) => <Button  bg='none'  key={link.id} _hover={{backgroundColor: "Aqua"}} as='a' href={link.url}  target="_blank"><ListIcon as={ViewIcon} color='green.500'/>{link.label}</Button>)
                        }
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
