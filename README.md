# SameerPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `docs/` directory (per `angular.json`), optimized by default for production.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Docker & CI/CD

This repository includes a Docker multi-stage build and a GitHub Actions workflow that builds and pushes an image to Docker Hub.

- Image: `${DOCKERHUB_USERNAME}/sameer-portfolio`
- Build context: repository root using `Dockerfile`

### GitHub Secrets Required

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token or password

### Workflow Triggers

- Push to `master` builds and pushes with branch/tag metadata
- Tags matching `v*.*.*` produce semantic version image tags
- Manual runs via Workflow Dispatch

### Local Docker Test (Windows PowerShell)

```powershell
docker build -t <your-username>/sameer-portfolio:local .
docker run -p 8080:80 <your-username>/sameer-portfolio:local
```

Open `http://localhost:8080` to view the site.
