React API Layer Example
------------------------

This is a simple example repository to show what it looks like to extract the API layer from a React hook that does an asynchronous request.

This abstraction is the first step in being able to easily test your API layers with tools like [Pact](https://pact.io)

This repository is built from `create-react-app` with the [example API hook from the react documentation here](https://reactjs.org/docs/faq-ajax.html).

The interesting parts are in [`src/MyComponent/index.js`](src/MyComponent/index.js) and [`src/MyComponent/service/api.js`](src/MyComponent/service/api.js)
