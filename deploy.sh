#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate to the build directory
cd dist

# custom domain
echo victorxlr.me > CNAME

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:victorxlr/victorxlr.github.io.git master


cd -