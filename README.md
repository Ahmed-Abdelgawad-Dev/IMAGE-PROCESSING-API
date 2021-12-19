# Image Processing API - Udacity

A project uses Node & Express combo to build a server with a scalable code and architecture, as well common middlewares are implemented .

## How to build and start the server:

The project can be built and run as follow:

### 1. Installing the dependencies:

`yarn` or `npm i`

### 2. Production ready build folder:

`yarn prod`

This command will compile typeScript code into JavaScript  in the `./build` folder and make a production ready code.

### 3. Start the Server:

`yarn start`

Starting the server running on port `3000`.

## Testing, Linting and formatting

### 1. Linting with esLint

`yarn lint`

### 2. Testing with Jasmine

`yarn test`

### 3. Formatting with prettier:

`yarn format`

###Note:  run  `pkill -9 node` in the terminal in case port 3000 is busy.

## Endpoint

### `/api/images/display/?filename=<image_name>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - example.jpg.

    For example: `localhost:3000/api/images/display/?filename=pic1`

### `/api/images/resize_image/?width=<width>&height=<height>&filename=<image_name>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - example.jpg.

    For example: `localhost:3000/api/images/resize_image/?width=500&height=500&filename=pic2`

#### Available Image options

From pic1 to pic5

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- Images requested will be cached in new_image file without reprocessing the size again.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The JavaScript web framework for back-end.
- [TypeScript](https://www.typescriptlang.org/) - Microsoft superset of JavaScript.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS package for processing images.
