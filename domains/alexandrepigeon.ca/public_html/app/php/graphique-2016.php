

<?php
header("Access-Control-Allow-Origin: *");
	require 'bd.php';

    $data_points = array();
    $data_cumul = array();
    $result = mysqli_query($con, "SELECT * FROM brasse");
    $cumul = 0;

 		while ($row = mysqli_fetch_array($result)) {


      if ($row['Date de fabrication']<date('Y-m-d',strtotime('2017-01-01'))&&$row['Date de fabrication']>date('Y-m-d',strtotime('2016-01-01'))) {
        $cumul = $cumul + (int)$row['Volume final'];
        $point = array("y" =>$row['Volume embouteillé'],"label" =>$row['Date de fabrication'] );

        array_push($data_points, $point);

      }


	 	}

	 		 echo json_encode($data_points, JSON_NUMERIC_CHECK);


	 	mysqli_close($con);
?>
