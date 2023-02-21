#!/usr/bin/env node
/* eslint-disable */
/**
 * Contains the miscellaneous route handlers.
 * @author Tonny Mwambingu <https://github.com/Mwambingu>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
