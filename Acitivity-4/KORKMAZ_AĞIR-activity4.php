<!DOCTYPE html>

<?php
const CURRENCIES = array("USD" => 1.0, "CAD" => 0.74, "EUR" => 1.09);
$toValue = 0;
$fromValue = 0;

function calculate(string $from, string $to, float $from_amount)
{
	$from_to_usd = $from_amount * CURRENCIES[$from];
	$to_amount = $from_to_usd / CURRENCIES[$to];
	return $to_amount;
}

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset ($_GET["f_value"]) && isset ($_GET["f_currencies"]) && isset ($_GET["t_currencies"])) {
	$toValue = calculate($_GET["f_currencies"], $_GET["t_currencies"], $_GET["f_value"]);
	$fromValue = $_GET["f_value"];
	unset($_GET["f_value"]);
}
?>





<html lang="en">

<head>
	<title>Java Jam Coffee House</title>
	<meta name="description" content="CENG 311 Inclass Activity 1" />

</head>

<body>
	<form action="activity4.php" method="GET">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="f_value" value="<?php echo $fromValue ?>" />
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="f_currencies">
						<option value="USD"> USD </option>
						<option value="CAD"> CAD </option>
						<option value="EUR"> EUR </option>
					</select>
				</td>
			</tr>
			<tr>
				<td>

					To:
				</td>
				<td>
					<input type="text" name="t_value" value="<?php echo $toValue ?>" />
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="t_currencies">
						<option value="USD"> USD </option>
						<option value="CAD"> CAD </option>
						<option value="EUR"> EUR </option>
					</select>
				</td>
			</tr>
			<tr>
				<td>

				</td>
				<td>

				</td>
				<td>

				</td>
				<td>
					<input type="submit" value="convert" />
				</td>
			</tr>
		</table>

	</form>

</body>