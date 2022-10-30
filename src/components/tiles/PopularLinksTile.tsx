import { TileId } from "@/types";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface PopularLinksTileProps {
  tileId: TileId;
}

export const PopularLinksTile: React.FC<PopularLinksTileProps> = ({ tileId }) => {
  const color = `var(--text-color-${tileId})`;
  return (
    <Box p="2" color={color} position="relative">
      <Heading p="2" fontSize="xl" fontWeight="bold">
        Popular Links
      </Heading>
      <Box w="80%" bg="white" height="1px" ml="2" bgColor={color} />
      <ul>
 
      <li><a href="https://mail.google.com/mail/u/0/?tab=wm#inbox">Gmail</a></li>
        <li><a href="https://docs.google.com/spreadsheets/u/0/">Google Spreedsheet</a></li>
        <li><a href="https://docs.google.com/document/u/0/">Google Docs</a></li>
        <li><a href="https://mail.yahoo.com/d/folders/1">Yahoo Mail</a></li>
      </ul>
    </Box>
  );
};
