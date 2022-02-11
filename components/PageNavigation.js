import * as React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const Cont = styled.div``;

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      border: "1px solid #FFC403",
    },
    "&	.Mui-selected": {
      color: "#ffffff",
      backgroundColor: " #FFC403",
    },
  },
}));
export default function PageNavigation({}) {
  const classes = useStyles();
  return (
    <Cont>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        classes={{ ul: classes.ul }}
      />
    </Cont>
  );
}
