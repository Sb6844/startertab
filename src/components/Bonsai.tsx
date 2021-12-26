import React, { useEffect, useState } from "react";
import { getBonsaiBase, grow } from "../helpers/bonsaiHelpers";
import * as BONSAI from "../helpers/bonsaiHelpers";
import { ShootType } from "../types/bonsai";
import { Box, Text } from "@chakra-ui/react";

const Bonsai = (): JSX.Element => {
  const getEmptyBonsai = (): string[][] => {
    const arrayOfSpaces = [];
    for (let i = 0; i < BONSAI.rows; i += 1) {
      arrayOfSpaces[i] = new Array(BONSAI.cols);
      for (let j = 0; j < BONSAI.cols; j += 1) {
        arrayOfSpaces[i][j] = "\u00A0";
      }
    }
    return arrayOfSpaces;
  };

  const [bonsai, setBonsai] = useState<string[][]>(getEmptyBonsai());

  const resetBonsai = async () => {
    const array = getEmptyBonsai();
    setBonsai(array);
  };

  const growBonsai = async () => {
    await resetBonsai();

    const startYPos = BONSAI.rows - 1;
    const startXPos = Math.round(BONSAI.cols / 2) - 1;
    grow(
      startYPos,
      startXPos,
      BONSAI.lives,
      0,
      ShootType.trunk,
      bonsai,
      setBonsai
    );
  };

  useEffect(() => {
    const startGrowing = async () => {
      growBonsai();
    };
    startGrowing();
  }, []);

  return (
    <Box
    // display="table-cell"
      // textAlign="center"
      pos="absolute"
      bottom="2"
      left="5"
      // right="0"
      // verticalAlign="bottom"
    >
      {bonsai.map((line, idx) => {
        const joinedLine = line.join("");
        return (
          <Text
            lineHeight={"11px"}
            fontSize="xs"
            key={idx}
            dangerouslySetInnerHTML={{ __html: joinedLine }}
          />
        );
      })}
      {getBonsaiBase()
        .split("\n")
        .map((val, idx) => (
          <Text
            color="black"
            lineHeight={"12px"}
            fontSize="xs"
            key={idx}
            dangerouslySetInnerHTML={{ __html: val }}
          />
        ))}
    </Box>
  );
};

export default Bonsai;
