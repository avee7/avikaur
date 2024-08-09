import { extendTheme } from '@chakra-ui/react';
import { Typography } from './Typography';
import { MdBorderColor } from 'react-icons/md';

const theme = extendTheme({
  fonts: {
    heading: "Prociono, serif",
    body: `"Source Sans 3", sans-serif`
  },
  styles: {
    global: {
      '@font-face': [
        {
          fontFamily: 'Prociono',
          src: `
            url('/fonts/Prociono-Regular-webfont.ttf') format('truetype'),
            url('/fonts/Prociono-Regular-webfont.woff') format('woff')
          `,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      ],
      'html, body': {
        color: '#0A0911',
      },
      'body': {
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: "18px",
        
      }
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'dashed',
      //   },
      // },
    },
  },
  components: {    
    Heading: {
      baseStyle: {
        color: '#0A0911'
      },
      sizes: {
        '6xl': { 
          fontFamily: Typography.heading['heading-large']['6xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['6xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['6xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['6xl'].lineHeight,
        },
        '5xl': { 
          fontFamily: Typography.heading['heading-large']['5xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['5xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['5xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['5xl'].lineHeight,
        },
        '4xl': { 
          fontFamily: Typography.heading['heading-large']['4xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['4xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['4xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['4xl'].lineHeight,
        },
        '3xl': { 
          fontFamily: Typography.heading['heading-large']['3xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['3xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['3xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['3xl'].lineHeight,
        },
        '2xl': { 
          fontFamily: Typography.heading['heading-large']['2xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['2xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['2xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['2xl'].lineHeight,
        },
        'xl': { 
          fontFamily: Typography.heading['heading-large']['xl'].fontFamily,
          fontSize: Typography.heading['heading-large']['xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['xl'].lineHeight,
        },
        'lg': {
          fontFamily: Typography.heading['heading-large']['lg'].fontFamily,
          fontSize: Typography.heading['heading-large']['lg'].fontSize,
          fontWeight: Typography.heading['heading-large']['lg'].fontWeight,
          lineHeight: Typography.heading['heading-large']['lg'].lineHeight,
        },
        "md": {
          fontFamily: Typography.heading['heading-large']['md'].fontFamily,
          fontSize: Typography.heading['heading-large']['md'].fontSize,
          fontWeight: Typography.heading['heading-large']['md'].fontWeight,
          lineHeight: Typography.heading['heading-large']['md'].lineHeight,
        },
        "sm": {  
          fontFamily: Typography.heading['heading-large']['sm'].fontFamily,
          fontSize: Typography.heading['heading-large']['sm'].fontSize,
          fontWeight: Typography.heading['heading-large']['sm'].fontWeight,
          lineHeight: Typography.heading['heading-large']['sm'].lineHeight,
        }
      },
      defaultProps: {
        size: 'md', // Default size for all Headings if not specified
      }
    },
    Text: {
      baseStyle: {
        color: '#0A0911'
      },
      sizes: {
        '5xl': {
          fontFamily: Typography.text['5xl']['font-semibold'].fontFamily,
          fontSize: Typography.text['5xl']['font-semibold'].fontSize, 
          fontWeight:  Typography.text['5xl']['font-semibold'].fontWeight,
          lineHeight:  Typography.text['5xl']['font-semibold'].lineHeight,
          letterSpacing: Typography.text['5xl']['font-semibold'].letterSpacing
        },
        '4xl': {
          fontFamily: Typography.text['4xl']['font-semibold'].fontFamily,
          fontSize: Typography.text['4xl']['font-semibold'].fontSize, 
          fontWeight:  Typography.text['4xl']['font-semibold'].fontWeight,
          lineHeight:  Typography.text['4xl']['font-semibold'].lineHeight,
          letterSpacing: Typography.text['4xl']['font-semibold'].letterSpacing
        },
        '3xl': {
          fontFamily: Typography.text['3xl']['font-normal'].fontFamily,
          fontSize: Typography.text['3xl']['font-normal'].fontSize, 
          fontWeight:  Typography.text['3xl']['font-normal'].fontWeight,
          lineHeight:  Typography.text['3xl']['font-normal'].lineHeight,
          letterSpacing: Typography.text['3xl']['font-normal'].letterSpacing
        },
        '2xl': {
          fontFamily: Typography.text['2xl']['font-normal'].fontFamily,
          fontSize: Typography.text['2xl']['font-normal'].fontSize, 
          fontWeight:  Typography.text['2xl']['font-normal'].fontWeight,
          lineHeight:  Typography.text['2xl']['font-normal'].lineHeight,
          letterSpacing: Typography.text['2xl']['font-normal'].letterSpacing
        },
        'xl':{
          fontFamily: Typography.text['xl']['font-normal'].fontFamily,
          fontSize: Typography.text.xl['font-normal'].fontSize, 
          fontWeight: Typography.text.xl['font-normal'].fontWeight,
          lineHeight: Typography.text.xl['font-normal'].lineHeight,
          letterSpacing: Typography.text['xl']['font-normal'].letterSpacing

        },
        'lg': {
          fontFamily: Typography.text['lg']['font-normal'].fontFamily,
          fontSize: Typography.text.lg['font-normal'].fontSize, 
          fontWeight: Typography.text.lg['font-normal'].fontWeight,
          lineHeight: Typography.text.lg['font-normal'].lineHeight,
          letterSpacing: Typography.text['lg']['font-normal'].letterSpacing
        },
        'md': {
          fontFamily: Typography.text['md']['font-normal'].fontFamily,
          fontSize: Typography.text.md['font-normal'].fontSize, 
          fontWeight: Typography.text.md['font-normal'].fontWeight,
          lineHeight: Typography.text.md['font-normal'].lineHeight,
          letterSpacing: Typography.text['md']['font-normal'].letterSpacing
        },
        'sm': {
          fontFamily: Typography.text['sm']['font-normal'].fontFamily,
          fontSize: Typography.text.sm['font-normal'].fontSize, 
          fontWeight: Typography.text.sm['font-normal'].fontWeight,
          lineHeight: Typography.text.sm['font-normal'].lineHeight,
          letterSpacing: Typography.text['sm']['font-normal'].letterSpacing
        },
        'xs': {
          fontFamily: Typography.text['xs']['font-normal'].fontFamily,
          fontSize: Typography.text.xs['font-normal'].fontSize, 
          fontWeight: Typography.text.xs['font-normal'].fontWeight,
          lineHeight: Typography.text.xs['font-normal'].lineHeight,
          letterSpacing: Typography.text['xs']['font-normal'].letterSpacing
        },

        defaultProps: {
          size: 'lg', // Default size for all Headings if not specified
        }
      }
    },
    Link: {
      sizes: {
        'xl': {
          fontSize: Typography.text['xl']['font-normal'].fontSize, 
          fontWeight:  Typography.text['xl']['font-normal'].fontWeight,
          lineHeight:  Typography.text['xl']['font-normal'].lineHeight,
        },
        lg: {
          fontSize: Typography.text.lg['font-normal'].fontSize, 
          fontWeight: Typography.text.lg['font-normal'].fontWeight,
          lineHeight: Typography.text.lg['font-normal'].lineHeight,
        },
        md: {
          fontSize: Typography.text.md['font-normal'].fontSize, 
          fontWeight: Typography.text.md['font-normal'].fontWeight,
          lineHeight: Typography.text.md['font-normal'].lineHeight,
        },
        defaultProps: {
          size: 'lg', 
        }
      }
    },
    Button: {
      variants: {
        "outline":{
          fontSize: "22px",
          color: "#0A0911",
          borderColor: "#0A0911",
          borderWidth: "2px",
          borderRadius: '8px',
          bg: "transparent",
          paddingLeft: '2rem',
          paddingRight: '2rem',
          height: "4rem",
          _hover: {
            bg: "#76b584",          
          },
          _active: {
            bg: "#76b584",
          }
  
        },
        "filled":{
          fontSize: "20px",
          color: "#f4f4f4",
          borderColor: "#6C63FF",
          borderWidth: "1px",
          borderRadius: '8px',
          bg: "transparent",
          paddingLeft: '2rem',
          paddingRight: '2rem',
          height: "3.5rem",
          _hover: {
            bg: "#1a1a1a",          
          },
          _active: {
            bg: "rgba(108,99,255,0.18)",
          }
  
        },

      },
     
      defaultProps: {
        variant: 'outline', 
      }
    }
     
    
  }
});

export default theme;