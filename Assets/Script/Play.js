#pragma strict
var Bang:AudioClip;
var Click:AudioClip;
var Reload:AudioClip;

var Chambers : int;
var Players : int;
var Rounds : int;
var Bullets : int;
var CurrentPlayer : int;

var Dead : int;
var Game : boolean;
var AV = new Array(100); //Nor told me that name

var player1 : UnityEngine.UI.Text;
var player2 : UnityEngine.UI.Text;
var player3 : UnityEngine.UI.Text;
var player4 : UnityEngine.UI.Text;
var player5 : UnityEngine.UI.Text;
var player6 : UnityEngine.UI.Text;
var player7 : UnityEngine.UI.Text;
var player8 : UnityEngine.UI.Text;
var player9 : UnityEngine.UI.Text;
var player10 : UnityEngine.UI.Text;
var player11 : UnityEngine.UI.Text;
var player12 : UnityEngine.UI.Text;
var player13 : UnityEngine.UI.Text;
var player14 : UnityEngine.UI.Text;
var player15 : UnityEngine.UI.Text;
var player16 : UnityEngine.UI.Text;
var player17 : UnityEngine.UI.Text;
var player18 : UnityEngine.UI.Text;

var Title : UnityEngine.UI.Text;
var Sub : UnityEngine.UI.Text;
var Chambers9 : UnityEngine.UI.Text;
var Players9 : UnityEngine.UI.Text;
var Rounds9 : UnityEngine.UI.Text;
var Bullets9 : UnityEngine.UI.Text;

var number : int;
var number2 : int;

//Animation shit
var image1 : GameObject;
var image2 : GameObject;
var image3 : GameObject;
var image4 : GameObject;
var image5 : GameObject;

function Start () {
	Chambers = PlayerPrefs.GetInt("Chambers");
	Players = PlayerPrefs.GetInt("Players");
	Rounds = PlayerPrefs.GetInt("Rounds");
	Bullets = PlayerPrefs.GetInt("Bullets");
	CurrentPlayer = 1;
	Dead = 0;
	Game = true;
	number2 = 1;
	GetComponent.<AudioSource>().PlayOneShot(Reload);
	
	if (Players < 2) {
	player2.text = "";
	}if (Players < 3) {
	player3.text = "";
	}if (Players < 4) {
	player4.text = "";
	}if (Players < 5) {
	player5.text = "";
	}if (Players < 6) {
	player6.text = "";
	}if (Players < 7) {
	player7.text = "";
	}if (Players < 8) {
	player8.text = "";
	}if (Players < 9) {
	player9.text = "";
	}if (Players < 10) {
	player10.text = "";
	}if (Players < 11) {
	player11.text = "";
	}if (Players < 12) {
	player12.text = "";
	}if (Players < 13) {
	player13.text = "";
	}if (Players < 14) {
	player14.text = "";
	}if (Players < 15) {
	player15.text = "";
	}if (Players < 16) {
	player16.text = "";
	}if (Players < 17) {
	player17.text = "";
	}if (Players < 18) {
	player18.text = "";
	}
}

function Update () {
	Chambers9.text = " Chambers " + Chambers + "/" + PlayerPrefs.GetInt("Chambers");
	Players9.text = "Players " + (Players - Dead) + "/" + PlayerPrefs.GetInt("Players");
	Rounds9.text = "Rounds " + Rounds + "/" + PlayerPrefs.GetInt("Rounds");
	Bullets9.text = "Bullets " + Bullets + "/" + PlayerPrefs.GetInt("Bullets");
	
	//Checks if current player is dead
	if (Input.GetMouseButtonDown(0) && Game == false) {
		Application.LoadLevel ("MainMenu");
	}
	
	if (Input.GetMouseButtonDown(0) && Chambers != 0 && Game != false) {
		number = Random.Range(1, Chambers + 1);
		
		trigger();
		if (number == 1) {
			Dead2 ();
			Bullets -= 1;
			GetComponent.<AudioSource>().PlayOneShot(Bang);
		}else {
			GetComponent.<AudioSource>().PlayOneShot(Click);
		}
		
		if (CurrentPlayer == Players) {
			CurrentPlayer = 1;
		}else {
			CurrentPlayer += 1;
		}if (AV[CurrentPlayer] == "Dead") {
			while (AV[CurrentPlayer] == "Dead") {
				CurrentPlayer += 1;
			}
			if (CurrentPlayer > Players) {
				CurrentPlayer = 1;
				while (AV[CurrentPlayer] == "Dead") {
					CurrentPlayer += 1;
				}
			}
		}
		
		Chambers -= 1;
		Title.text = "Player " + CurrentPlayer;
		Debug.Log(CurrentPlayer);
	}else if (Chambers == 0|| Bullets == 0) {
		Rounds -= 1;
		Bullets = PlayerPrefs.GetInt("Bullets");
		Chambers = PlayerPrefs.GetInt("Chambers");
		GetComponent.<AudioSource>().PlayOneShot(Reload);
	}
	
	if (Dead == (Players - 1)) {
		Game = false;
		Debug.Log("Game Ended");
		Title.text = "Player " + CurrentPlayer +" WINS!!!";
		Sub.text = "Tap again to return to main menu";
		Title.color = Color.green;
	}else if (Rounds == 0) {
		Game = false;
		Debug.Log("Game Ended");
		Title.text = "Remaining Players WIN!!!";
		Sub.text = "Tap again to return to main menu";
		Title.color = Color.green;
	}
	
}
	
function Dead2 () {
	AV[CurrentPlayer] = "Dead";
	
	if (CurrentPlayer == 1) {
		player1.text = "Player 1 is Dead";
		player1.color = Color.red;
	}else if (CurrentPlayer == 2) {
		player2.text = "Player 2 is Dead";
		player2.color = Color.red;
	}else if (CurrentPlayer == 3) {
		player3.text = "Player 3 is Dead";
		player3.color = Color.red;
	}else if (CurrentPlayer == 4) {
		player4.text = "Player 4 is Dead";
		player4.color = Color.red;
	}else if (CurrentPlayer == 5) {
		player5.text = "Player 5 is Dead";
		player5.color = Color.red;
	}else if (CurrentPlayer == 6) {
		player6.text = "Player 6 is Dead";
		player6.color = Color.red;
	}else if (CurrentPlayer == 7) {
		player7.text = "Player 7 is Dead";
		player7.color = Color.red;
	}else if (CurrentPlayer == 8) {
		player8.text = "Player 8 is Dead";
		player8.color = Color.red;
	}else if (CurrentPlayer == 9) {
		player9.text = "Player 9 is Dead";
		player9.color = Color.red;
	}else if (CurrentPlayer == 10) {
		player10.text = "Player 10 is Dead";
		player10.color = Color.red;
	}else if (CurrentPlayer == 11) {
		player11.text = "Player 11 is Dead";
		player11.color = Color.red;
	}else if (CurrentPlayer == 12) {
		player12.text = "Player 12 is Dead";
		player12.color = Color.red;
	}else if (CurrentPlayer == 13) {
		player13.text = "Player 13 is Dead";
		player13.color = Color.red;
	}else if (CurrentPlayer == 14) {
		player14.text = "Player 14 is Dead";
		player14.color = Color.red;
	}else if (CurrentPlayer == 15) {
		player15.text = "Player 15 is Dead";
		player15.color = Color.red;
	}else if (CurrentPlayer == 16) {
		player16.text = "Player 16 is Dead";
		player16.color = Color.red;
	}else if (CurrentPlayer == 17) {
		player17.text = "Player 17 is Dead";
		player17.color = Color.red;
	}else if (CurrentPlayer == 18) {
		player18.text = "Player 18 is Dead";
		player18.color = Color.red;
	}
	
	Dead += 1;
}

function trigger () {
	image1.SetActive (false);
	image2.SetActive (true);
	yield WaitForSeconds (.1);
	image2.SetActive (false);
	image3.SetActive (true);
	yield WaitForSeconds (.1);
	image3.SetActive (false);
	image4.SetActive (true);
	yield WaitForSeconds (.1);
	image4.SetActive (false);
	if (number == 1) {
		image5.SetActive (true);
		yield WaitForSeconds (.1);
		image5.SetActive (false);
		
	}
	image1.SetActive (true);
}

function wait () {
	yield WaitForSeconds (5);
}