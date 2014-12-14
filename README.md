# Werval Single Page Application - Gradle Skeleton

For the example's sake, this skeleton expose a simple JSON resource consumed
using [jQuery](http://jquery.com/).
A comprehensive set of sample tests are included.

The Gradle build delegates browser application build to
[gulp](http://gulpjs.com/) using [{less}](http://lesscss.org/) and
[browserify](http://browserify.org/).
The gulp tasks are bound to the Gradle build to provide seamless integration.
As a result, the development mode provide live-reload of both server and
browser code.

To run in development mode: `gradle devshell`

To run in production mode: `gradle start`

To run tests: `gradle check`

To build a production distribution: `gradle distZip`

To see all available tasks: `gradle tasks`

The Werval documentation is available at http://localhost:23023/@doc in
development mode.
