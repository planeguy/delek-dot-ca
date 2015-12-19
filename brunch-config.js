module.exports = {
	config: {
		paths:{
			public: 'dist/dev',
			watched: ['app', 'components', 'vendor','assets', 'dev-assets']
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
			vendor: ['vendor/es5/globals/**', 'components/**'],
			assets: ['assets/**', 'dev-assets/**']
		},
		plugins: {
			on: ["riot"],
			riot:{
				extension: 'tag.html',
				pattern: /\.tag.html$/
			},
			babel:{ 
				presets: ['es2015'],
				ignore: ['vendor/es5/**']
			}
		},
		overrides: {
			production: {
				paths:{
					public: 'dist/prod',
					watched: ['app', 'components', 'vendor','assets']
				}
			}
		},
		server:{
			port:1337,
			base:'/',
			noPushState:true
		}
	}
};