# Ragu Frontend

## App

Built with Remix

- [Remix](https://remix.run/docs)
- [Vite](https://remix.run/docs/en/main/future/vite)
- [Tailwind](https://tailwindcss.com/docs)
- [React-i-18n](https://react.i18next.com/)

### Development

start / attach to the docker container

```sh
docker-compose up frontend
```

then open http://localhost:5173

## Environment

If you look inside [.env.development](./.env.development), you will see that some are missing.
Those are the ones that are sensitive and should not be committed to the repository.
You can find them in 1Password under the "Ragu" vault. You should then create a .env.development.local file and add the missing variables.

## Components

Built with :

- [Radix-ui](https://www.radix-ui.com/docs/get-started/introduction) (with [tailwindcss-radix](https://tailwindcss-radix.vercel.app/))
- [CVA](https://cva.style/docs)
- [Lucide](https://lucide.dev/) for icons

Showcased in [Storybook](https://storybook.js.org/)

To run the storybook, add the `--profiles storybook` flag to the `docker-compose` command and open http://localhost:6006

```sh
docker-compose up --profiles storybook
```

## Tests

### Unit tests

Unit tests are written using [Vitest](https://vitest.dev/) and using helpers from [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

Run unit tests with

```sh
yarn test
```

Run vitest ui locally with

```sh
yarn test:ui
```

### E2E tests

Coming soon™️ using [Playwright](https://playwright.dev/)
