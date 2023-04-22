import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";



const them = createTheme({
    palette: {
        primary: {
            main: "#181818",
        },
        secondary: {
            main: "#242424",
        },
        bg_color: {
            main: "#151515",
        },
        bg_form: {
            main: "#242424",
        },
        my_white: {
            main: "#ffffff",
        }, 
        red: {
            main: "red",
        }, 
        blue:{
            main:"#1877f2",
        }
    },
    typography:{
        h1:{
            fontSize:"36px",
            fontWeight:'700',
            colors:"#ffffff",
        },
        h2:{
            fontSize:"30px",
            fontWeight:'700'
        },
        h3:{
            fontSize:"20px",
            fontWeight:'700'
        },
        body1:{
            fontSize:"20px",
            fontWeight:'100'
        }
    },
})

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        bg_color: Palette['primary'];
        bg_form: Palette['primary'];
     my_white: Palette['primary'];
     blue: Palette['primary']
     red: Palette['primary'];
    }
    interface PaletteOptions {
        bg_color?: PaletteOptions['primary'];
        bg_form?: PaletteOptions['primary'];
         my_white?: PaletteOptions['primary'];
         blue?: PaletteOptions['primary']
         red?: PaletteOptions['primary'];
    }
  }
  
  declare module '@mui/material/Box' {
    export interface ChipPropsColorOverrides {
        mycolor2: true
         mycolor: true
       my_white: true
       red: true
    }
  }
export default them