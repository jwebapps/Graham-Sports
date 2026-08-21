# Graham Bears Athletics — GitHub Pages edition

This version is designed for **GitHub Pages**.

## What changed from the Netlify version

- The sports schedules remain preloaded in `static-schedules.js`, so they load instantly.
- Netlify Functions were removed.
- Scores and standings are stored in static files under `results/`.
- `.github/workflows/sync-val-results.yml` runs automatically every hour and checks Valley Athletic League for updated final scores and standings.
- The app's **Refresh scores & standings** button downloads the newest JSON currently published by GitHub Pages. It does not itself scrape VAL.
- Team-specific URLs such as `?team=bb8` still work.
- The PWA, Graham Bears branding, exact VAL location directions, and Add to Calendar feature are preserved.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `graham-bears`.
2. Extract this zip and upload **all files and folders at the repository root**, including the hidden `.github` folder and `.nojekyll` file.
3. Commit the files to the `main` branch.
4. In GitHub open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then Save.
7. GitHub will publish the site at a URL similar to `https://YOUR-USERNAME.github.io/graham-bears/`.

All asset paths are relative, so this project works from a GitHub Pages repository subfolder.

## Enable automatic score syncing

The workflow is included and requests `contents: write` permission so it can commit changed result files.

After uploading the repository:

1. Open the repository's **Actions** tab.
2. Select **Sync VAL results**.
3. Click **Run workflow** once to test it.
4. After that, GitHub schedules the job approximately once per hour.

GitHub scheduled Actions are not guaranteed to run at the exact minute specified and can occasionally be delayed. This is fine for school-sports scores, since schedules are already bundled into the app.

If the workflow cannot push, check **Settings → Actions → General → Workflow permissions** and allow GitHub Actions to have read/write permissions if your repository settings require it.

## Results files

Each team gets its own file, for example:

- `results/bb8.json`
- `results/bb7.json`
- `results/softball.json`
- `results/xc.json`

The sync script keeps an existing result file if VAL is temporarily unavailable, instead of wiping previously synced scores.

## Local preview on Windows

From this folder in Command Prompt:

```cmd
python -m http.server 8000
```

Then open `http://localhost:8000`.

The app and preloaded schedules work locally. The bundled `results/*.json` files will display whatever results were most recently committed to the repository.
