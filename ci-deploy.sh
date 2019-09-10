## parsing parameters

## generate directory

mkdir -p .deploy_git

echo "www.fusiondb.cn" > .deploy_git/CNAME

## cp public static file to .deploy_git

cp -r public/* .deploy_git/

## git commit & push

