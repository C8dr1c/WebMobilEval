import React from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
export default function InstallDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">{props.title}</DialogTitle>
      <DialogContent dividers={true}>
        <Box display="flex" alignItems="flex-start">
          {!!props.logo && (
            <Box mr={1}>
              <img src={props.logo} alt="logo" />
            </Box>
          )}
          {!!props.features && (
            <Box>
              <Typography variant="body2" component="div">
                {props.features}
              </Typography>
            </Box>
          )}
          {!!props.instructions && (
            <Box>
              <Typography variant="body2" component="div">
                {props.instructions}
              </Typography>
            </Box>
          )}
        </Box>
        {!!props.description && (
          <>
            <Typography variant="subtitle1">Description:</Typography>
            <Typography variant="body2" component="div">
              {props.description}
            </Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
