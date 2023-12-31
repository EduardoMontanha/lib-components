import { createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
        primary: {
            main: "#FF0000"
        },
        secondary: {
            main: "#00FF00"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
                        backgroundColor: '#202020',
                        color: '#fff',
                    }),
                }),
            }
        }
    }
});

export default theme;