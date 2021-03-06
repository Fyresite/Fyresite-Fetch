This project is for and created by Fyresite


## Package includes

- Fetch, updateFetchConfig, fetch

## Installing

```

npm install @fyresite/fetch

```

## Example Usages


Import the Fetch Class

```
import { Fetch } from '@fyresite/fetch'

Fetch.updateConfig({
  "localhost": "localhost:3000"
})


```

Import just the functions

```
import { updateFetchConfig } from '@fyresite/fetch'
import { fetch } from '@fyresite/fetch'


let response = await fetch('/api/v1/session/create', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: 'fake@gmail.com',
    password: 'foobar'
  })
}).then(res => {
  return res;
}).catch(err => {
  console.log(err);
  return {status: 501, message: `Fetch error ${err}`}
});

```

Fetch class includes a url variable which is meant to have the key as the expected window.location.hostname, so you can use updateFetchConfig in order to input your necessities

```

updateFetchConfig({
  'expected window.location.hostname': 'api.location.com'
  'expected window.location.hostname': 'api.location.com:3000'
})

```

Place this function within the index of your project, so the rest of your project shares the correct urls.
