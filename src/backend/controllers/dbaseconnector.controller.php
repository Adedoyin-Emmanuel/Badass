<?php


/**
 * Primary class for the Database connection
 * @author Adedoyin Emmanuel Adeniyi
 */

namespace Controllers\Database;


class DatabaseConnector
{
    private $database;
    private $servername;
    private $username;
    private $password;
    public $conn;

    public function __construct()
    {
         $this->conn = "Emmysoft";
    }
}
