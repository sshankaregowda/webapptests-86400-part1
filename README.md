# hub-web-app-v5-tests

This framework contains tests written using Nightwatch. It is using javascript.
It has page object model pattern, generates logs, generates XML/HTML reports and screenshots 

Nightwatch tests can be run in firefox 


##Necessary softwares/libraries/browser to be installed:

1. JAVA & JDK - below are the versions to be used
       java version "1.8.0_191"
       Java(TM) SE Runtime Environment (build 1.8.0_191-b12)
       Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)

2. Install firefox

3. Install node at least 8.12.0

4. Install yarn v1.13.0 (https://yarnpkg.com/lang/en/docs/install/#mac-stable)

5. Install yarn add nightwatch

##Note: Below are different AWS codes for different ebay test environments. Currently syd-dev is the test environment in which we are launching the ebay application

syd-dev  - ebay application runs in this environment
pdx-prod 
syd-prod  
fra-prod 
pdx-dev

##Prerequisites to clone and setup the framework

1. Checkout repo from github. 

2. Import the repo to VS code.

3. Open cmd and navigate to project location in VS code.

4. By default repo has template for .env files which is .env.xxx-xxx.template. Below are the ones for different test environment. These are just the samples to show the framework standards. Currently, for running ebay application, I have used .env.syd-dev.template because nightwatch requires env variable (--env syd-dev) to be specified while running the scripts.

.env.syd-dev.template
.env.pdx-dev.template
.env.pdx-prod.template
.env.syd-prod.template
.env.fra-prod.template
.env.local.template


##Steps to run the nightwatch tests

1. In commmand line enter
 yarn nightwatch --test tests/e2e/testcases/ebayTest.js --env syd-dev  ---> to run the ebay application in sample test environment syd-dev which is already explained above.

2. Verify the XML and HTML reports generated under reports folder

3. Verify screenshots under screenshots folder

4. Verify log file - selenium-debug.log/selenium-server.log



##Framework structure: EBAY-TESTS

    .
    ├── lib
    │   └── drivers                                        # contains driver executable files for chrome and firefox. It also contains selenium server standalone jar
    │
    ├── reports
    │   └── XMLReports                                     # contains xml reports for the test case
    |
    |-- log4js                                             # Formatting and styling logs
    |
    |-- logs                                               # Contains logs                                            
    │
    ├── screenshots
    │   └── Chrome                                         # contains screen shots images for the test case
    |
    |-- node_modules                                       # contains all libraries
    │
    |
    ├── tests
    │   └── e2e
    │       ├── custom-assertions                          # contains all kinds of assertions such as elementPresent(), containsText()
    |       |
    |       |-- custom-commands                            # contains all kinds of actions such as clickElement(), setText()
    │       │
    │       ├── helpers                                    # contains common javascript functions
    │       │
    │       ├── pages                                      # contains page object model for ebay home page and ebay results page
    │       │
    │       ├── testcases                                  # contains ebay test cases
    │       
    │-- .babelrc                                            # used for transpiling the code
    |-- .env.syd-dev.template                               # ebay application runs in this environment
    |-- .env.pdx-dev.template                               # sample test environment
    |-- .env.pdx-prod.template                              # sample test environment
    |-- .env.syd-prod.template                              # sample test environment
    |-- .env.fra-prod.template                              # sample test environment
    |-- .env.local.template                                 # sample test environment
    |
    |-- .eslintrc.json                                      # used for formatting and as a linter tool
    |
    |
    |-- all docker related files
    |   |-docker-compose.yaml
    |   |-Dockerfile                                        # Scripts can be run in docker container
    |   |-entrypoint.sh
    |   |-gruntfile.js
    |
    |-- html-reporter.hbs                                   # For HTML styling the output results
    |
    |
    ├── configuration.js                                   # to load .properties file and get the values stored under it
    ├── nightwatch.conf.js                                 # it is configuration file which calls nightwatch.json
    ├── nightwatch.json                                    # it is configuration file which is required by test runner
    ├── global.js                                          # contains functions which are run before and after test suites/test cases.
    ├── package.json                                       # has all dependencies
    ├── selenium-debug.log                                 # has log file
    └── selenium-server.log                                # has log file
# newnightwatch
# hub-web-app-v5-tests
