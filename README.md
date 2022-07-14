# api-javascript-framework

Welcome ! :wave:

- [About](#about):memo:
- [Pre-Requisites](#pre-requisites):raised_hands:
- [How-to](#how-to):grey_question:
- [Branch & Merging](#branch-and-merging):seedling:
- [Pull Request Process](#pull-request-process):bell:
- [Zephyr Scale Properties Configuration](#zephyr-scale-properties-configuration):newspaper:

## About📝

This is a API testing framework POC, written in JavaScript & using mocha.

## Pre-Requisites🙌

IDE of choice / code editor
mocha
node.js & npm

Link to installation of Node.js & npm
> https://phoenixnap.com/kb/install-node-js-npm-on-windows

Link to installation of mocha
> https://www.jetbrains.com/help/webstorm/running-unit-tests-on-mocha.html#ws_mocha_installation

## How-to❔
1. Use cmd prompt/bash/shell/powershell to navigate to the project folder. 
2. Run the 'npm run test' command.

## Branch and Merging🌱
For the purpose of this repo, we have opted to go for a trunk-based development strategy.This will make the repository easy to maintain and the responsibility can be undertaken by any capable person with little to no instruction required.

Read more here:
> ### [Branch & merging strategy](docs/branch_merge_strategy.md);

## Pull Request Process🔔

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build;
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters;
3. Remember to follow the [branch & merging strategy](docs/branch_merge_strategy.md);
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you;a


## Zephyr Scale Properties configuration📰

1. Locate the ***zephyr.properties*** file in the ***resources*** folder of your project<br/>
2. Alter the following properties as needed - (You should only need to change API & Project Key):   
   ***Zephyr Scale connection details. E.g. for Cucumber report:***
      >baseUri=https://api.zephyrscale.smartbear.com/v2/  
       uriSuffix=automations/executions/cucumber  
       apiKey=<AUTHORIZATION_API_KEY>  
       projectKey=<PROJECT_KEY>  
       autoCreateTestCases=true

   ***Results file details. E.g. for Cucumber report:***
      >resultsFolder=cucumber-report  
       resultsFileExtension=json

   ***Customize test cycle details (optional). If customTestCycle=false, testCycle params are ignored.***
      >customTestCycle=false  
       testCycleName=Test Cycle Name  
       testCycleDescription=Test Cycle Description  
       testCycleFolderName=Test Cycle Folder (make sure the folder name exists in Zephyr Scale)  
       testCycleJiraProjectVersion=1  
       customFields={}

   ***Get folders for TEST_CASE, TEST_PLAN or TEST_CYCLE. Used only when customTestCycle=true. Use TEST_CYCLE as default.***
      >folderType=TEST_CYCLE  
       maxResults=20

Security Note: Such parameters as apiKey and projectKey should be provided as environment variables (e.g. from CI, command line or Vault).

## License
MIT
