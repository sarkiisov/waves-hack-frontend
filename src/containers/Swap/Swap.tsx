/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Switch, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { Copyable } from "../../components/Copyable";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import { SelectValue } from "../../types/components";
import SwapCard from "../../components/Swap/SwapCard";
import { Link } from "react-router-dom";

const networkValues: SelectValue[] = [
  {
    value: "WEST/HACK",
    label: "WEST/HACK",
  },
  {
    value: "HACK2/WEST",
    label: "HACK2/WEST",
  },
];

const filterValues: SelectValue[] = [
  "Apr High",
  "Apr Low",
  "Total stacked High",
  "Total stacked Low",
  "Status completed",
  "Status Act/Upcoming",
].map((label) => ({ value: label, label }));

export const Swap = () => {
  const [netValue, setNetValue] = useState(networkValues[0].value);
  const [filterValue, setFilterValue] = useState(filterValues[0].value);
  const [inputValue, setInputValue] = useState("");

  const getSelectHandler =
    (callback: {
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (arg0: any): void;
    }) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      callback(event.target.value);
    };

  const handleChangeNet = getSelectHandler(setNetValue);
  const handleChangeFilter = getSelectHandler(setFilterValue);
  return (
    <>
      {/*<Box padding="20px">
        <Typography>Outlined</Typography>
        <Box>
          <Button variant="outlined" size="large">
            Connect Metamask
          </Button>
        </Box>
        <Typography>Outlined Secondary</Typography>
        <Box>
          <Button variant="outlined" color="secondary" size="large">
            0x7676554F2...63B2
          </Button>
        </Box>
        <Typography>Outlined Primary</Typography>
        <Box>
          <Button variant="outlined" color="primary" size="large">
            Lauch a pool
          </Button>
        </Box>
        <Typography>Outlined Small</Typography>
        <Box>
          <Button variant="outlined" size="small">
            Stake
          </Button>
        </Box>
        <Typography>Contained</Typography>
        <Box>
          <Button variant="contained" size="large">
            Launch
          </Button>
        </Box>
        <Typography>Contained Small</Typography>
        <Box>
          <Button variant="contained" size="small">
            Stake
          </Button>
        </Box>
      </Box>
      <Box padding="20px">
        <Switch />
      </Box>
      <Box padding="20px">
        <Select
          size="medium"
          values={networkValues}
          value={netValue}
          onChange={handleChangeNet}
        />

        <Select
          size="small"
          values={filterValues}
          value={filterValue}
          onChange={handleChangeFilter}
        />
      </Box>
      <Box padding="20px" width="600px">
        <Input
          name="poolname"
          label="Pool name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          error={false}
          helperText="Please insert 1-2 words"
        />

        <TextArea
          name="description"
          label="Description"
          placeholder="Please add the description up to 300 characters"
          error={false}
        />
      </Box>
      <Box padding="20px">
        <Copyable
          valueToCopy="0xdE12C39621c420571c5d676ac5c8Cbf85370Ea01"
          variant="primary"
        />
      </Box>*/}
      <SwapCard />
      <Link to="/pool">pool</Link>
    </>
  );
};
