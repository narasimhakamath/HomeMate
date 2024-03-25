const multiplierUnit = 4;

const theme = {
	colors: {
		backgroundColor: {
			default: '#FEFAEF',
			light: '#ECF0F1',
			paper: '#FFFFFF',
		},
		primary: {
			main: '#F17B3E',
			light: '#689378',
			dark: '#BC4040'
		},
		success: {
			main: '#27AE60',
			light: '#6DDE9C',
			dark: '#096E33'
		},
		error: {
			main: '#E74C3C',
			light: '#CC593F',
			dark: '#701A07'
		},
		info: {
			main: '##1ABC9C',
			light: '#85F2DD',
			dark: '#075747'
		},
		warning: {
			main: '#FF6348',
			light: '#FA9C8C',
			dark: '#9E3A29'
		},
		grey: {
			main: '#57606f',
			light: '#303640',
			ultralight: '#D2D4D6',
			dark: '#040404',
		},
		common: {
			light: '#FFFFFF',
			dark: '#000000',
			grey: '#57606F',
		},
	},
	shape: {
		radius: (value) => value * multiplierUnit,
		spacing: (value) => value * multiplierUnit,
	},
	font: {
		fontWeight: {
			100: 'Sono-ExtraLight',
			200: 'Sono-Light',
			300: 'Sono-Regular',
			400: 'Sono-Medium',
			500: 'Sono-SemiBold',
			600: 'Sono-Bold',
			700: 'Sono-ExtraBold',
		}
	},
};

export default theme;