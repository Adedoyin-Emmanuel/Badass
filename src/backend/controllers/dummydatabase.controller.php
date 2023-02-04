<?php

require_once "dbaseconnector.controller.php";

use Controllers\Database\DatabaseConnector;

/**
 * 
 * Base class for the user controller class
 * @author: Adedoyin Emmanuel Adeniyi
 */


final class UserController extends DatabaseConnector
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_users()
    {
        $get_users_query = "SELECT * FROM users";

        if ($statement = $this->conn->prepare($get_users_query)) {
           // $statement->bind_param("ii", 1, 0);
            $statement->execute();

            $result = $statement->get_result();

            if (!$result) {
                return "an error occured" . $this->conn->error;
            }
            $user_row = $result->fetch_assoc();

            if($user_row > 0)
            {
               #pass
            }else
            {
                return "server returned 0 results";
            }

        }
    }
}
