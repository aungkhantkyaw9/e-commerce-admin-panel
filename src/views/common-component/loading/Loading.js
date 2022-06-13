/**
 * Common Loading Component
 * @author Aung Khant Kyaw
 * @create 20/4/2022
 */

import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

function Loading(props) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.show}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default Loading;
