To Run (do both these!):
$  php artisan serve   # for laravel
$  npm run dev         # for tailwind

=================================================

php artisan migrate

# Drop and re-create table
php artisan migrate:fresh

=================================================

php artisan make:controller  <name>
php artisan make:migration   <name>
php artisan make:model       <name>


=================================================

-The db:seed command will simply add new items to your tables 
 but will not edit or delete any of your existing data. 
$ php artisan db:seed

-Completely erase all of your tables and data, 
 then use your migration files to re-build all the tables, 
 and finally use our seed data to populate the tables:
$ php artisan migrate:fresh --seed

=================================================

Linode:

To start over:
cd  ~/.ssh
rm id_ed25519
rm id_ed25519.pub
-delete the contents added into ~/.ssh/known_hosts

Here are the contents of the "known_hosts" file if you ssh using IP and then domain:
45.79.30.90 ...
45.79.30.90 ...
45.79.30.90 ...
php-web-app ...


-Create a Linode
-Add domain

On my machine:
ssh root@php-web-app.com

If you first 

On Linode:
sudo apt update
sudo apt install nginx

"Using SSH Keys Instead of Passcodes":
Create SSH Key (on my machine):
cd ~/.ssh
ssh-keygen -t ed25519 -C "jhollow6@asu.edu"
-enter
-enter
-enter

-Copy contents of ~/.ssh/id_ed25519.pub

On Linode:
-paste contents of id_ed25519.pub into:
cd .ssh
nano authorized_keys
-save and exit
-you can now ssh into the machine without entering a password:
ssh root@php-web-app.com

"The Environment that Laravel Needs":
apt install  php-cli  unzip  php8.1-fpm  php-mysql  php-mbstring  php-xml  php-bcmath  php-curl  php8.1-gd

curl -sS http://getcomposer.org/installer -o /tmp/composer-setup.php
php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
composer --version
apt install mysql-server 

mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'ENTER-PASSWORD-HERE';
exit

mysql_secure_installation
-enter password
-validate password?                 no
-change the password?               no
-remove anonymous users?            yes
-disallow root login remotely?      yes
-remove test database and access?   yes
-reload privilage tables?           yes

mysql -u root -p

mysql> CREATE DATABASE ourlaravelapp;
mysql> CREATE USER 'ourappuser'@'%' IDENTIFIED WITH mysql_native_password BY 'ENTER-PASSWORD-HERE';
mysql> GRANT ALL ON ourlaravelapp.* TO 'ourappuser'@'%';

"Using Git to Push Files to our VPS - Part 1/2":
On Linode:
cd /var/www
mkdir ourapp
mkdir ourrepos
cd ourrepos
mkdir ourapp

cd /var/www/ourrepos/ourapp
git config --global init.defaultBranch main
git init --bare
cd hooks
touch post-receive
nano post-receive

#!/bin/bash
git --work-tree=/var/www/ourapp --git-dir=/var/www/ourrepos/ourapp checkout -f

-Save
-Change privilages:
chmod +x post-receive

-On my machine in the local repo:
git remote add prod ssh://root@php-web-app.com/var/www/ourrepos/ourapp
git add .
git commit -m "deploy"
git push prod main

-On Linode:
cd /var/www/ourapp
npm install
npm run build
composer install

"Using Git to Push Files to our VPS - Part 2/2":
cd /etc/nginx/sites-available
touch mysite
nano mysite

-Copy contents from _html-templates/vps-nginx.txt into the mysite file (after changing the domain name in the file)

sudo systemctl reload nginx

cd /var/www/ourapp
touch .env

-Copy contents from local .env file into Linode .env file.
-Change:
APP_ENV=production
APP_DEBUG=false
APP_URL (delete)

DB_DATABASE=ourlaravelapp
DB_USERNAME=ourappuser
DB_PASSWORD=ENTER-PASSWORD-HERE

-migrate
php artisan migrate

chown -R www-data:www-data storage
php artisan storage:link

-Symlink sites-available directory to sites-enabled
sudo ln -s /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/

-confirm:
cd /etc/nginx/sites-enabled
ls

-Reset NGINX:
sudo systemctl reload nginx

-Seed DB:
cd /var/www/ourapp
php artisan db:seed