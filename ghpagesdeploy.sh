echo "pulling master branch from origin" &&
git checkout master &&
git pull origin master &&
echo "project buidling started" &&
ng build --prod --output-path docs --base-href "https://svoboda-vlad.github.io/demo-angular-jwt-auth/" &&
cp docs/index.html docs/404.html &&
echo "project building finished" &&
echo "git commiting started" &&
git add . &&
git commit -m "GitHub pages deployment" &&
git push origin master &&
echo "git commiting finished" &&
echo "deployment finished"
