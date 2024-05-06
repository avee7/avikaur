import { extendTheme } from '@chakra-ui/react';
import { Typography } from './Typography';
import { MdBorderColor } from 'react-icons/md';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        color: '#e0e0e0',
        lineHeight: 'tall',
      },
      'body': {
        fontSize: "18px"
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
        color: '#e0e0e0'
      },
      sizes: {
        '4xl': { 
          fontSize: Typography.heading['heading-large']['4xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['4xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['4xl'].lineHeight,
        },
        '3xl': { 
          fontSize: Typography.heading['heading-large']['3xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['3xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['3xl'].lineHeight,
        },
        '2xl': { 
          fontSize: Typography.heading['heading-large']['2xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['2xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['2xl'].lineHeight,
        },
        'xl': { 
          fontSize: Typography.heading['heading-large']['xl'].fontSize,
          fontWeight: Typography.heading['heading-large']['xl'].fontWeight,
          lineHeight: Typography.heading['heading-large']['xl'].lineHeight,
        },
        lg: {
          fontSize: Typography.heading['heading-large']['lg'].fontSize,
          fontWeight: Typography.heading['heading-large']['lg'].fontWeight,
          lineHeight: Typography.heading['heading-large']['lg'].lineHeight,
        },
        "md": {
          fontSize: Typography.heading['heading-large']['md'].fontSize,
          fontWeight: Typography.heading['heading-large']['md'].fontWeight,
          lineHeight: Typography.heading['heading-large']['md'].lineHeight,
        },
        "sm": {  
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
        color: '#e0e0e0'
      },
      sizes: {
        '3xl': {
          fontSize: Typography.text['3xl']['font-normal'].fontSize, 
          fontWeight:  Typography.text['3xl']['font-normal'].fontWeight,
          lineHeight:  Typography.text['3xl']['font-normal'].lineHeight,
        },
        '2xl': {
          fontSize: Typography.text['2xl']['font-normal'].fontSize, 
          fontWeight:  Typography.text['2xl']['font-normal'].fontWeight,
          lineHeight:  Typography.text['2xl']['font-normal'].lineHeight,
        },
        'xl':{
          fontSize: Typography.text.xl['font-normal'].fontSize, 
          fontWeight: Typography.text.xl['font-normal'].fontWeight,
          lineHeight: Typography.text.xl['font-normal'].lineHeight,

        },
        'lg': {
          fontSize: Typography.text.lg['font-normal'].fontSize, 
          fontWeight: Typography.text.lg['font-normal'].fontWeight,
          lineHeight: Typography.text.lg['font-normal'].lineHeight,
        },
        'md': {
          fontSize: Typography.text.md['font-normal'].fontSize, 
          fontWeight: Typography.text.md['font-normal'].fontWeight,
          lineHeight: Typography.text.md['font-normal'].lineHeight,
        },
        'sm': {
          fontSize: Typography.text.sm['font-normal'].fontSize, 
          fontWeight: Typography.text.sm['font-normal'].fontWeight,
          lineHeight: Typography.text.sm['font-normal'].lineHeight,
        },
        'xs': {
          fontSize: Typography.text.xs['font-normal'].fontSize, 
          fontWeight: Typography.text.xs['font-normal'].fontWeight,
          lineHeight: Typography.text.xs['font-normal'].lineHeight,
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
          fontSize: "20px",
          color: "#6C63FF",
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