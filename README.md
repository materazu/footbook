# Footbook

Footbook is a simple application that allows you to navigate the football leagues and discover the main players.

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate the documentation

Run `npm run generate:documentation` to build the doc, you can use the superb `(sudo) npm i -g http-server` and read the doc with `http-server documentation`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Headless version for running tests can be executed with `npm run test:headless`.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Headless version for running end-to-end tests can be executed with `npm run e2e:headless`.

## Testing the ci
This project run under gitlab-ci and chain all test, lint and build stages. It is recommended to run locally `npm run before:push` before pushing on master.
It will emulate the pipeline and make sure all is ok and pipeline will not fail. 
