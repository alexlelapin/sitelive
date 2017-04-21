<?php

$con = mysqli_connect("localhost", "alexandr", "X*u3kZdQCcVK(pGMd)(65**2", "alexandr_wp1");
mysqli_set_charset($con,'utf8');

mysqli_query($con, "UPDATE brasse SET `Age (jours)` = DATEDIFF(now(),`Date de fabrication`)");
mysqli_query($con, "SELECT * FROM `brasse` WHERE 1");


?>