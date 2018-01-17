#pragma strict
function Play () {
		Application.LoadLevel ("Game");
		PlayerPrefs.SetInt("Chambers", 6);
		PlayerPrefs.SetInt("Players", 6);	
		PlayerPrefs.SetInt("Rounds", 6);	
		PlayerPrefs.SetInt("Bullets", 1);	
}

function Custom () {
		Application.LoadLevel ("Custom");
}

function Quit () {
		Application.Quit();
}