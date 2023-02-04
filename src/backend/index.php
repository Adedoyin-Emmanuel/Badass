<?php

require_once "controllers/dummydatabase.controller.php";


$user_data = new UserController();

$user_data->get_users();

foreach($user_data as $data)
{
    print_r();
}