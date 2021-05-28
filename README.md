# This repo is a minimal reproduction for a potential issue with vite and/or vite-plugin-vue2

## The "issue"

In development, an incorrect path in a CSS url() may resolve correctly as the browser will handle the path resolution.

In this project, an icon is used as a background-image. This icon is referenced from the `components/subdir` folder as `../assets/tick.svg`. If this path is being resolved from the source file, it is incorrect as it doesn't go up enough folders to reach the root before accessing `assets`

Navigate to `http://localhost:3000` and see the icon being displayed

Now navigate to `http://localhost:3000/hello/foo/bar`, and the browser won't be able to find the icon as it tries to resolve the path based on the current route


This is very standard and is to be expected.

Now build and preview the project using

```
npm run build
npm run preview
```

navigate to `http://localhost:5000` and see the icon missing. The browser tried to load `../assets/tick.svg` because during the build, vite couldn't find the file using its path resolution and left the original url() path.

Next, edit the `App.vue` file to use the correct `url(../../assets/tick.svg)` path, then build again

This time, the build process found the `tick.svg` file. It was added to the `dist/assets` directory and updated in the built `App` component.

