import app from "./app";
import getAllCharacters from "./endpoints/getAllCharacter"
import createCharacter from "./endpoints/createCharacter"


app.get ("/character", getAllCharacters)
app.put ("/character", createCharacter)
