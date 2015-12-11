module.exports = {
	config: {
		paths:{
			public: 'dist/dev',
			watched: ['app', 'components', 'vendor','assets']
		},
		files:{
			javascripts: { 
				joinTo: {
					'app.js':['app/**', 'components/**'],
					'vendor.js':['vendor/**']
				}
			}
		},
		conventions:{
			vendor: ['vendor/globals/**'],
			assets: ['assets/**']
		},
		plugins: {
			on: ["riot"],
			riot:{
				extension: 'tag.html',
				pattern: /\.tag.html$/
			}
		},
		overrides: {
			production: {
				paths:{
					'public': 'dist/prod'
				}
			}
		}
	}
};