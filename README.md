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

## Practice schedules and calendar export
For 2026–27 Season 1, Boys Basketball, Girls Softball, and Cross Country include practices from 3:30–5:00 PM Monday–Thursday on non-game/non-meet days, with no Friday practices. Boys Basketball is sourced from the Graham Athletics Boys Basketball page; Cross Country and Softball use the provided Graham practice rule. The single team calendar export now contains both games/meets and practices.


Calendar subscriptions
- The app now shows only Apple Calendar and Google Calendar options.
- Apple uses a webcal:// subscription link.
- Google uses Google Calendar's subscription-by-URL flow.
- Calendar feeds are hosted under /calendars/<team>.ics.


Fix: Add Team Calendar buttons now open the Apple/Google subscription menu instead of calling the old download function.


## Fall 2026 active sports
This build intentionally includes only the sports currently in season:
- 8th Boys Basketball
- 7th Boys Basketball
- 6th Boys Basketball
- Girls Softball
- Cross Country

Future-season sports are hidden until their schedules are ready.

## Calendar
Each active team has one hosted calendar containing games/meets and practices.
The Add Team Calendar button offers Apple Calendar and Google Calendar subscriptions.

## Results sync
The GitHub Actions results sync is limited to the five active fall team IDs.


Google Calendar: the mobile button now shows desktop subscription instructions and copies the hosted ICS URL. Once added on Google Calendar web, it syncs to Android.


## Next-game logic fix
The app now determines Next Game and Upcoming Games from the actual event date/time.
A game automatically drops out of Upcoming three hours after its scheduled start even if VAL has not yet posted a final score.
Past games without a synced result are labeled Past rather than remaining stuck as the next game.


## 6th grade score fix
- Seeded current VAL scores and standings for 6th Boys Basketball.
- Corrected Columbia game from Sep 15 to Sep 14.
- Result merge now falls back to a unique opponent match if VAL reschedules a game date.
- Browser results cache bumped to v2.


## Softball scores fix
- Restored current Graham softball results and 1-3 standings record.
- Supports VAL W/L-only results when no numeric score is published.
- Corrected Columbia to Sep 14 and postponed Miller game to Sep 21.
- Updated softball calendar/practice exclusions to match corrected schedule.
- Future GitHub Actions syncs now preserve W/L-only result rows.


## BB7 / BB8 score fixes
- Seeded current VAL scores and standings for 7th and 8th Boys Basketball.
- Both teams are 2-3 through five completed games.
- Corrected Columbia games from Sep 15 to Sep 14.
- Preserved opponent-based result matching for rescheduled games.
- Results cache bumped to v3 and PWA cache to v6.


## Graham Fans
This build adds a second app view for people who want to follow Graham sports without following a specific athlete/team.

Open directly with:
`?view=fans`

Fans mode shows:
- upcoming games across BB8, BB7, BB6, Girls Softball, and Cross Country
- latest posted results
- team records and current Graham standing
- tap-through from any fan card into the existing team page

The original My Team view remains unchanged.


## Fans icon update
The Graham Fans view now uses sport icons instead of BB8 / SB / XC text tags:
- numbered basketball icons for BB6 / BB7 / BB8
- softball icon for Girls Softball
- shoe icon for Cross Country
