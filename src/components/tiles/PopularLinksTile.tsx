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
      </Heading>
      <Box w="80%" bg="white" height="1px" ml="2" bgColor={color} />
      <p>hello</p>
    </Box>
  );
};
