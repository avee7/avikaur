import { extendTheme } from '@chakra-ui/react';
import { Typography } from './Typography';

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
        color: '#FFFF'
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
          fontSize: '24px', // Large size heading
          fontWeight: 'medium',
          lineHeight: '110%',
        },
        md: {
          fontSize: '18px', // Medium size heading
          fontWeight: 'normal',
          lineHeight: '110%',
        },
        small: {  // Custom size example that you might define
          fontSize: '60px',
          fontWeight: 'bold',
          lineHeight: 'shorter',
        }
      },
      defaultProps: {
        size: 'md', // Default size for all Headings if not specified
      }
    },
    Text: {
      sizes: {
        '2xl': {
          fontSize: Typography.text['2xl']['lineHeight-8']['font-normal'].fontSize, 
          fontWeight:  Typography.text['2xl']['lineHeight-8']['font-normal'].fontWeight,
          lineHeight:  Typography.text['2xl']['lineHeight-8']['font-normal'].lineHeight,
        },
        lg: {
          fontSize: Typography.text.lg['lineHeight-7']['font-normal'].fontSize, 
          fontWeight: Typography.text.lg['lineHeight-7']['font-normal'].fontWeight,
          lineHeight: Typography.text.lg['lineHeight-7']['font-normal'].lineHeight,
        },
        defaultProps: {
          size: 'lg', // Default size for all Headings if not specified
        }
      }
    },
    Link: {
      sizes: {
        'xl': {
          fontSize: Typography.text['xl']['lineHeight-7']['font-normal'].fontSize, 
          fontWeight:  Typography.text['xl']['lineHeight-7']['font-normal'].fontWeight,
          lineHeight:  Typography.text['xl']['lineHeight-7']['font-normal'].lineHeight,
        },
        lg: {
          fontSize: Typography.text.lg['lineHeight-7']['font-normal'].fontSize, 
          fontWeight: Typography.text.lg['lineHeight-7']['font-normal'].fontWeight,
          lineHeight: Typography.text.lg['lineHeight-7']['font-normal'].lineHeight,
        },
        defaultProps: {
          size: 'lg', // Default size for all Headings if not specified
        }
      }
    }
     
    
  }
});

export default theme;