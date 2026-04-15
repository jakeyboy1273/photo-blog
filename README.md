# photo-blog

Learning some frontend by weaning myself off Instagram

This project is a photography blog which I am using to learn Astro, Tailwind CSS, and frontend web design in general. My goal is to have a place to post my favourite photos and stories where I can own the format and deployment.

The project is hosted on GitHub pages at
[jakeyboy1273.github.io/photo-blog](jakeyboy1273.github.io/photo-blog)

## 🚀 Project Structure

Inside of the Astro project, there are the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/components/` directory contains reusable Astro components.

The `src/content/` directory contains "[collections](https://docs.astro.build/en/guides/content-collections/)" of related files. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check the frontmatter using an optional schema.

Implemented collections:

- blog (.MDX blog posts)
- galleries (indexed directories containing photos)

Any static assets are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build & run the Astro preview                    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run check ...`       | Run astro check on the project                   |
| `npm run lint ...`        | Run esLint on the project                        |
| `npm run format ...`      | Run prettier formatter on the project            |
| `npm run prepare ...`     | Run pre-commit commands (format, check, lint)    |
| `npm run lighthouse ...`  | Run a local Lighthouse score benchmark test      |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

```sh
npm create astro@latest -- --template blog
```
