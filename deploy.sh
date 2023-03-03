#!/usr/bin/env sh

set  -e

npm run bulid

cd dist

git init
git add -A 
git commit -m'New Depolyment'
git push -f git@github.com:Nursultan12345/KaspiNet.git master:gh-pages

cd -