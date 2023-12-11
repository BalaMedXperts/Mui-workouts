import { Snackbar, Button, Alert } from '@mui/material'
import { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />
  }
)
const SnackBarMui = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (
    event,
    reason
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message='Form submitted successfully!'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}

export default SnackBarMui