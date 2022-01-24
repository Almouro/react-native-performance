import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const CircularProgressWithLabel = ({
  color,
  ...props
}: {
  color: string;
  size: number;
  value: number;
}) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} style={{ color }} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          style={{ fontSize: 28, color }}
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
};
