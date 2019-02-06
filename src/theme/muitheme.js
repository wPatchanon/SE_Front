import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fafafa',
            dark: '#c7c7c7',
            contrastText: '#000000',
        },
    }
});