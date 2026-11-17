# Symphony No. 9 - Windows app

## Run locally
    npm install
    npm start

## Build .exe
    npm run pack      (outputs installer + portable .exe to dist/)

## Build on GitHub
Push this repo. The "Build Windows app" workflow runs on each push to main and uploads the .exe
as an artifact. Tag a version (e.g. v1.0.0) to attach it to a Release.
