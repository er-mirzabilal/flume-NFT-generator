import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hideMessage } from '../../store/messageSlice';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbar() {
  const dispatch = useDispatch();
  const {state, options}  = useSelector(state => state.message);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideMessage())
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={state} onClose={handleClose} {...options}>
        <Alert onClose={handleClose} severity={options.severity} sx={{ width: '100%' }}>
          {options.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
