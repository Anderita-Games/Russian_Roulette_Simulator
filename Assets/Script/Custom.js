#pragma strict
var Chambers : UnityEngine.UI.InputField;
var Players : UnityEngine.UI.InputField;
var Rounds : UnityEngine.UI.InputField;
var Bullets : UnityEngine.UI.InputField;


function Continue () { 
	if (Chambers.text != "" && Players.text != "" && Rounds.text != "" && Bullets.text != "") {
		if (int.Parse(Players.text) <= 18) {
			PlayerPrefs.SetInt("Chambers", int.Parse(Chambers.text));
			PlayerPrefs.SetInt("Players", int.Parse(Players.text));	
			PlayerPrefs.SetInt("Rounds", int.Parse(Rounds.text));	
			PlayerPrefs.SetInt("Bullets", int.Parse(Bullets.text));		
			Application.LoadLevel ("Game");
		}
	}
}