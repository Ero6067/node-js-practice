const EventEmitter = require("events");
const uuid = require("uuid");

const id = uuid.v4();
//console.log(id);

class Logger extends EventEmitter {
	log(msg) {
		// Call event
		this.emit("message", { id: id, msg });
	}
}

//module.exports = Logger;

const logger = new Logger();

logger.on("message", data => console.log("Called Listener", data));

logger.log("Hello World");
