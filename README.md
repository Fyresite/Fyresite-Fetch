This project is for and created by Fyresite


## Package includes

- Fetch, updateFetchConfig, fetch

## Installing

```

npm install @fyresite/fetch

```

## Usages

If you would like to use the Fetch class simply use the Fetch import

- Fetch Class
	Example Import
		- import { Fetch } from '@fyresite/fetch'

If you would rather use function calls, import the functions

- { updateFetchConfig, fetch }
	- import { updateFetchConfig } from '@fyresite/fetch'
		- updateFetchConfig(urls) <-- Accepts an object as parameter
			EX. url object: {
				localhost: "localhost:3000"
				"12.234.32": "12.234.32:3000"
			}
	- import { fetch } from '@fyresite/fetch'
		- fetch(uri, options);
			- For a list of possible options visit whatWG-fetch



Fetch class includes a url variable which is meant to have the key as the expected window.location.hostname,
and the value to be the API you are expecting to connect to.

{
	'expected window.location.hostname': 'api.location.com'
	'expected window.location.hostname': 'api.location.com:3000'
}

Port of course is not necessary.
