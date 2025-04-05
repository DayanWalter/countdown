# Manual Deployment to GitHub Pages

Follow these steps to manually deploy the contents of the `dist` directory from the `main` branch to the root directory of the `gh-pages` branch.

## Instructions

### 1. Switch to the `gh-pages` branch

```bash
git checkout gh-pages
```

### 2. Fetch the files from the `main` branch without switching branches

```bash
git checkout main -- dist
```

### 3. Move the files from `dist` to the root directory of the `gh-pages` branch

```bash
cp -r dist/* .
rm -rf dist
```

Now, `index.html` and the `.js` files should be directly in the root directory of `gh-pages`.

### 4. Commit and push

Add the files, commit them, and push to the `gh-pages` branch:

```bash
git add .
git commit -m "Deploy dist to gh-pages"
git push origin gh-pages
```

## Notes

- Ensure GitHub Pages is configured to use the `gh-pages` branch as the source in your repository settings (`Settings > Pages`).
- Visit `https://<username>.github.io/<repository>` to verify your site is live.
- If the site doesn't update immediately, clear your browser cache (`Ctrl+F5` or `Cmd+Shift+R`) or wait a few minutes for GitHub Pages to reflect the changes.
