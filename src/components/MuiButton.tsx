import { Box, Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

  const MuiButton: React.FC = () => {
  return (
    <>  
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </Stack>
        <Box>
            <ButtonGroup size="small" variant="text" aria-label="Small button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" variant="outlined" aria-label="Medium-sized button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="primary" variant="contained" size="large" aria-label="Large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    </>
  );
}

export default MuiButton;