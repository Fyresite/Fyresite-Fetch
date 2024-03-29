class Fetch {
	static updateConfig(urls){
		this.urls = urls;
	}

	static request(uri, options){
	  // To keep fetch out of the global scope
	  // encourages importing this file.
	  require('whatwg-fetch');

	  let mod_uri = uri;
	  mod_uri = `${options.secure ? "https:" : window.location.protocol}//${this.urls[window.location.hostname] || window.location.hostname}${uri}`;

	  let finalOptions = Object.assign(
			{},
			options,
			{ credentials: 'include' }
		);

	  return fetch(mod_uri, finalOptions);
	}
	static getServerURL(options = {}) {
	  return `${options.secure ? "https:" : window.location.protocol}//${this.urls[window.location.hostname] || window.location.hostname}`;
	}
}

Fetch.urls = {
	localhost: "localhost:3000"
}

function request(uri, options) {
	return Fetch.request(uri, options)
}

function updateFetchConfig(urls){
	Fetch.updateConfig(urls);
}

function getServerURL(options){
  return Fetch.getServerURL(options);
}

module.exports = {
	Fetch: Fetch,
	updateFetchConfig: updateFetchConfig,
	fetch: request,
  getServerURL: getServerURL
}
