# Runlog

Runlog is a run tracking application for saving all of the details of a run to track personal progress, wear on running shoes, and more.

## Development Work

Run `npm run dev` to launch the app in development mode. Navigate to `http://localhost:4200`. The app will automatically reload as changes are made to the files. The server runs on `http://localhost:4201`.

### Graphql

When in development mode, navigate to `http://localhost:4201/graphql` to use the graphql playground editor in the browser.

### Authentication

To use most of the graphql routes, an access token is required in the Authentication header value that can be acquired by creating a user and making a `GET` request to `http://localhost:4201/get-token` with a valid username and password from a created user. Note: Creating a user through the graphql playground does not require an access token.

### Additional Info Needed For Development

See [Server Readme](https://github.com/jantzeca/AngularRunLog/blob/master/server/README.md) for additional info required to start the server.
