<?php

namespace Controllers\Database;

use mysqli;
use Exception;


/**
 * Primary class for the Database connection
 * @author Adedoyin Emmanuel Adeniyi
 */

class DatabaseConnector
{
    private $database = "test_cbt";
    private $servername = "localhost";
    private $username = "root";
    private $password = "zWFBAgc-7zrg5rQz";
    public $conn;

    public function __construct()
    {
        try {

            $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
        } catch (Exception $e) {
            die("Cannot connect to server " . $e->getMessage());
        }
    }
}
