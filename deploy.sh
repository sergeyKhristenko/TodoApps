#!/bin/sh
git clone git@github.com:sergeyKhristenko/sergeyKhristenko.github.io.git
cp -R ./dist/* ./sergeyKhristenko.github.io/
cd sergeyKhristenko.github.io/
git add .
git commit -m "deploy"
git push origin master

cd ..
rm -rf ./sergeyKhristenko.github.io