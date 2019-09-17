## parsing parameters

## yarn build & generate static website
yarn build


## git clone & commit & push
git clone git@github.com:FusionDB/fusiondb.github.io.git .deploy_git

## generate website realm name.
echo "www.fusiondb.cn" > .deploy_git/CNAME

cd .deploy_git/

git pull origin master

## cp public static file to .deploy_git
cp -r ../public/* ./

git add .

git commit -m "Site updated: $(date '+%Y-%m-%d %H:%M:%S')"

git push -u origin master