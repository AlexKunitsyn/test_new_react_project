import palette from './palette';

// const defaultFontFamily = "Roboto", "Helvetica", "Arial", sans-serif';

// import HelveticaWoff from '../fonts/helvetica/HelveticaRegular/HelveticaRegular.woff';
// import HelveticaEot from '../fonts/helvetica/HelveticaRegular/HelveticaRegular.eot';
// import HelveticaTtf from '../fonts/helvetica/HelveticaRegular/HelveticaRegular.ttf';

//
// const helvetica = {
//     fontFamily: 'Helvetica',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 'normal',
//     src: `
//     url(${HelveticaWoff}) format('woff'),
//     url(${HelveticaEot}) format('eot'),
//     url(${HelveticaTtf}) format('truetype')
//   `,
// };


export default {

    // helvetica,

    // fontFamily: [
    //     'ProximaNova',
    //     'Roboto',
    //     'Arial',
    //     'sans-serif',
    // ].join(','),

    h1: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '35px',
        letterSpacing: '-0.24px',
        lineHeight: '40px',
    },
    h2: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '26px',
        letterSpacing: '-0.24px',
        lineHeight: '36px',
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '24px',
        letterSpacing: '-0.06px',
        lineHeight: '28px',
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '-0.06px',
        lineHeight: '30px',
        marginBottom: 16,
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '-0.05px',
        lineHeight: '25px',
        marginBottom:8,
    },
    h6: {
        color: palette.darkGray,
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '-0.05px',
        lineHeight: '20px',
    },
    subtitle1: {
        color: palette.black,
        fontSize: '12px',
        letterSpacing: '-0.05px',
        lineHeight: '16px',
    },
    subtitle2: {
        color: palette.black,
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '20px',
    },
    body1: {
        color: palette.text.primary,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '21px',
        fontWeight: 400,
    },
    body2: {
        // color: palette.text.secondary,
        fontSize: '16px',
        letterSpacing: '-0.04px',
        lineHeight: '20px',
        color: palette.text.primary,
        fontWeight: 300,
    },
    button: {
        color: palette.text.primary,
        fontSize: '16px',
        textTransform: 'none',
    },
    caption: {
        color: palette.text.secondary,
        fontSize: '11px',
        letterSpacing: '0.33px',
        lineHeight: '13px',
    },
    overline: {
        color: palette.text.secondary,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.33px',
        lineHeight: '13px',
        textTransform: 'uppercase',
    },
};
