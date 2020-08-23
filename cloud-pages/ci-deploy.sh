## yarn build & generate static website
yarn build

## git clone & commit & push
git clone git@github.com:FusionDB/fusionlab.github.io.git .deploy_git

cd .deploy_git/

git pull origin master

## Deploying: git

## Clearing .deploy_git folder...
print "INFO  Clearing .deploy_git folder..."
rm -rf ./*

## Copying files from public folder...
print "INFO Copying files from public folder..."
cp -r ../public/* ./

## generate website realm name for github.com
echo "www.fusionlab.cn" > CNAME

git add .

git commit -m "Site updated: $(date '+%Y-%m-%d %H:%M:%S')"

git push -f origin master
