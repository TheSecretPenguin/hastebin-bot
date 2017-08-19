var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.commandname = "cat";
exports.description = "Get a picture of a cat";
exports.run = (client, message, args) => {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://random.cat/meow", false ); // false for synchronous request
    xmlHttp.send( null );
    var obj = JSON.parse(xmlHttp.responseText);
	message.channel.send("Cat: " + obj.file);

}
