const el4js = require("el4js"); // Import the package

const logger = new el4js.Logger(); // Initialize the logger

// All levels of logging (0-5)
/** 
 Every level from 0-3 has a src and a message parameter. 
 For more information see the documentation, coming soon TM
**/

// Examples
logger.debug("Making a new GET request", "http_client");
logger.trace("GET request successful!", "http_client");
logger.info("The request is long.", "http_client");
logger.warning("GET requests are deprecated.", "http_client");
logger.error("GET request could not be sent.", "http_client");
logger.fatal("GET request broke.", "http_client");
