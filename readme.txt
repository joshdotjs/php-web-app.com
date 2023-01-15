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
