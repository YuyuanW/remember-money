rm -rf build &&
yarn build &&
cd build &&
git init &&
git add .  &&
git commit -m 'update' --no-verify &&
git branch -M main &&
git remote add origin git@github.com:YuyuanW/remember-money-user.git &&
git push -f -u origin main && 
cd -
echo https://yuyuanw.github.io/remember-money-user