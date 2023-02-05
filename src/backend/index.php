<?php
/*
require_once "controllers/dummydatabase.controller.php";


$user_data = new UserController();

$user_data->get_users();

if ($user_data == "0 results") {
    die($user_data);
} else {
    if ($user_data->result->num_rows > 0) {
        $data = [];
        while ($rows = $user_data->result->fetch_assoc()) {
            array_push(
                $data,
                [
                    "id" => $rows["ID"],
                    "username" => $rows["user_name"],
                    "dateJoined" => $rows["date_joined"]
                ]
            );
        }

        $data_to_frontend = json_encode($data);
        echo $data_to_frontend;
     
    }
}
*/
