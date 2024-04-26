var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var displayScoresCalled = false;

window.onload = function () {
	document.getElementById("name").focus();
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function displayResults()
{
	var average = 0;
	let highScore = {name:"",score:0};
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
		if(scores[i]>highScore.score)
		{
			highScore.name = names[i];
			highScore.score = scores[i];
		}
	}

	document.getElementById("results").innerHTML="<h2> Results </h2> <p> Average score is "+average + "<br \> High Score =  "+highScore.name+" with a score of "+highScore.score+" </p><br />";
}

function displayScores()
{
	displayScoresCalled = true;
	var scoresString = ``;
	for(var i=0;i<scores.length;i++)
	{
		scoresString += `<tr><td>`+names[i]+`</td><td>`+scores[i]+`</td></tr>`;
	}
	document.getElementById("scores").innerHTML ="<h2> Scores </h2><br />";
	document.getElementById("scores_table").innerHTML=`
	<thead>
		<tr>
			<th>Name</th>
			<th>Score</th>
		</tr>
	</thead>
	<tbody>
	`+scoresString+`
	</tbody>
	`;
}

function addScore()
{
	var name = document.getElementById("name").value;
	var score = parseInt(document.getElementById("score").value);
	
	if(score < 0 || score > 100 || isNaN(score) || name == "") {
		alert("You must enter a name and a valid score");
		return;
	}

	names.push(name);
	scores.push(score);
	if(displayScoresCalled)
		displayScores();
}