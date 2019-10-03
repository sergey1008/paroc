module.exports = {
	formats: 'local woff woff2',
	display: "swap",
	custom: {
		"OpenSans": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/opensans-light-webfont.woff",
							woff2: "../fonts/opensans-light-webfont.woff2"
						}
					},
					400: {
						url: {
							woff: "../fonts/opensans-regular-webfont.woff",
							woff2: "../fonts/opensans-regular-webfont.woff2"
						}
					},
					600: {
						url: {
							woff: "../fonts/opensans-semibold-webfont.woff",
							woff2: "../fonts/opensans-semibold-webfont.woff2"
						}
					},
					700: {
						url: {
							woff: "../fonts/opensans-bold-webfont.woff",
							woff2: "../fonts/opensans-bold-webfont.woff2"
						}
					},
					900: {
						url: {
							woff: "../fonts/opensans-extrabold-webfont.woff",
							woff2: "../fonts/opensans-extrabold-webfont.woff2"
						}
					}
				}
			}
		}
	}
}