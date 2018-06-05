'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fetch = function () {
	function Fetch() {
		_classCallCheck(this, Fetch);
	}

	_createClass(Fetch, null, [{
		key: 'updateConfig',
		value: function updateConfig(urls) {
			this.urls = urls;
		}
	}, {
		key: 'request',
		value: function request(uri, options) {
			// To keep fetch out of the global scope
			// encourages importing this file.
			require('whatwg-fetch');

			var mod_uri = uri;
			mod_uri = (options.secure ? "https:" : window.location.protocol) + '//' + (this.urls[window.location.hostname] || window.location.hostname) + uri;

			var finalOptions = Object.assign({}, options, { credentials: 'include' });

			return fetch(mod_uri, finalOptions);
		}
	}, {
		key: 'getServerURL',
		value: function getServerURL() {
			return (options.secure ? "https:" : window.location.protocol) + '//' + (this.urls[window.location.hostname] || window.location.hostname);
		}
	}]);

	return Fetch;
}();

Fetch.urls = {
	localhost: "localhost:3000"
};

function request(uri, options) {
	return Fetch.request(uri, options);
}

function updateFetchConfig(urls) {
	Fetch.updateConfig(urls);
}

function getServerURL() {
	return Fetch.getServerURL();
}

module.exports = {
	Fetch: Fetch,
	updateFetchConfig: updateFetchConfig,
	fetch: request,
	getServerURL: getServerURL
};