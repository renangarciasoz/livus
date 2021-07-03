![LIVUS](https://uploads-ssl.webflow.com/5fd0edef097fd26388e43f14/60ad447427f394c34b8c9526_Livus%20Logo%20Dark%2056px.png)

## Technologies

- SSR/SSG - [Next.js](https://nextjs.org/)
- CI/CD - [Vercel](https://vercel.com/)
- GIT - [Github](https://github.com)
- SPEC/LANG - [Typescript](https://www.typescriptlang.org/)
- UNIT TESTS - [Jest](https://jestjs.io/) and [RTL](https://testing-library.com/)
- E2E TESTS - [Cypress](https://www.cypress.io/)

## Project Organization

Here's a quick description of each layer that compose the application.

    /						# Root content of project, where lint, tests, envs and all projects config can be found.
    /.github				# Github configuration as PR templates and pipeline actions for build and deploy
    /.next					# Compiled files
    /coverage               # Tests coverage reports
    /cypress				# E2E tests configuration and scenarios
    /public					# Folder for static files such as index.html, images, fonts and scripts
    /src					# Main project structure
    ├── /@fixtures			# Mocks and abstraction for unit and integration tests
    ├── /@types				# Types and interfaces of entities and method
    ├── /configs			# Project configuration as database building or web storage set ups
    ├── /constants			# Constants variables
    ├── /layouts			# Components that is a UI composition, a strong candidate to be extracted and become a shared library between project, avoid use hooks relate to a module, store or api request on this folder, but if you need it, consider to create a module or add to existed one.
    ├── /modules			# Modules of application based on domains, all module should have a low coupling, all module should be a strong candidate to be extracted and become a micro-frontend on feature.
    ├── /pages				# Components that compose modules and layout with routes and application composition, this layer should not be extracted from the project.
    ├── /services			# Abstraction of API request and outside components, such as: Analytics, Feature flags and Browser storage management
    ├── /**/__tests__		# All unit and integration tests
    ├── /**/__snapshots__.  # Snapshots files should have the same file's name and extension of the test but with a ".snap" on the end. Example: "login.test.ts.snap"
