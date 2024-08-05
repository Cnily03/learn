# Self-Study Manual

This project is a self-study manual for learning knowledge. It is a collection and compilation of notes, code, and other materials.

We're committed to providing a high-quality learning experience for everyone. Great ideas and teaching experiences often come when you are a learner. Therefore, it's encouraged to write and contribute something when learning. Take it as an enhancement of knowledge and a way to give back to the community.

The project is deployed on [learn.tampoo.io](https://learn.tampoo.io/).

## Build the project

Clone the project and install the dependencies with your preferred package manager.

```shell
pnpm install
```

Run package command to build the document.

```shell
pnpm run docs:build
```

Files will be generated in the `dist` directory at the root of the project.

## Development

VitePress configuration is located at [vitepress.config.ts](./vitepress.config.ts).

Theme configuration is located at [theme-config.yml](./theme-config.yml). It's mostly nav and sitebar configuration. For other theme configurations, it's recommended to modify [vitepress.config.ts](./vitepress.config.ts) with type hints.

Theme at [theme/](./theme/), which has path alias `@`.

All the documentations are located at [docs/](./docs/).

To use Vue in markdown, related components are most defined at [theme/components/docs/](./theme/components/docs/) and [theme/styles/utils/](./theme/styles/utils/).

## License

Copyright (c) Cnily03. All rights reserved.
Licensed under the [MIT](./LICENSE) License.
