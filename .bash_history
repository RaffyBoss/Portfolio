termux-setup-storage
~/storage
/storage/emulated/0
/sdcardls /sdcard
cd sdcards
find /storage/emulated/0 -type f -iname "*portfolio*.zip" 2>/dev/null
mv "/storage/emulated/0/Download/Website/Portfolio.zip" ~/
ls ~/
git add Portfolio.zip
git commit -m "Added Portfolio.zip"
git push
cd ~
unzip Portfolio.zip -d portfolio
mv ~/portfolio/* ~/Portfolio/
cd ~/Portfolio
git add .
git commit -m "Uploaded portfolio website files"
git push
mv ~/Portfolio/* ~/
rmdir ~/Portfolio
git add .
git commit -m "Moved website files to root for GitHub Pages"
git push
cd ~
ls
cd ~
ls
git add .
git commit -m "Moved website files to root for GitHub Pages"
git push
git pull --rebase
git push
cd ~/Portfolio
ls -la
rm -rf portfolio
git add -A
git commit -m "Removed extra portfolio folder for GitHub Pages"
git push
rm -rf Portfolio
git add -A
git commit -m "Removed uppercase Portfolio folder for GitHub Pages fix"
git push
touch .nojekyll
git add .nojekyll
git commit -m "Added .nojekyll to fix folder cache issue"
git push
rm -rf storage .ssh .config .gitconfig
git add -A
git commit -m "Cleanup: removed system folders breaking GitHub Pages"
git push
git config --global user.name "RaffyBoss"
git config --global user.email "bosslongsan34@gnail.com"
git commit -m "Cleanup: removed system folders breaking GitHub Pages"
git push
git pull --rebase origin main
rm .gitinconfig
rm -f .gitconfig
rm -f gitconfig
git pull --rebase origin main
git config --global user.email "bosslongsan34@gmail.com"
git config --global user.name "RaffyBoss"
git pull --rebase origin main
git status
cd ~/Portfolio
rm .gitconfig
git rebase --continue
cd ~/Portfolio
ls ~
rm .gitconfig
ls -a
git status
git commit --amend --no-edit
git commit -m "Fix rebase conflict"
git config --global user.email "bosslongsan34@gmail.com"
git config --global user.name "RaffyBoss"
git config --user.email "bosslongsan34@gmail.com"
git config --global user.email "bosslongsan34@gmail.com"
git config --global user.name "RaffyBoss"
cd ~
git status
git rebase --continue
git commit -m "Cleanup: remove local Termux system folders"
git rebase --continue
git status
git push --force-with-lease origin main
rm Portfolio.zip
git add -A
git commit -m "Removed backup ZIP"
git push
cd ~/Portfolio
termux-setup-storage
cp /storage/emulated/0/Download/logo-menorah.png resources/
ls resources
git status
git add resources/logo-menorah.png
git commit -m "Add menorah logo"
git push
nano index.html
nano about.html
