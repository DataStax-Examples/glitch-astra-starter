<!--- STARTEXCLUDE --->
# Glitch Astra Starter
*10 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/glitch-astra-starter#prerequisites)*

Jumpstart your next NodeJS prototype with this starter!
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-sample-app-default.png)

## Objectives
* Provide a fullstack development example using Astra as the storage backend
  
## How this works
Run this sample in Glitch or on your local machine and then use it to jump start your next App.

[Glitch](https://glitch.com/) is a a place to prototype fast, full-stack web apps in your browser for free.

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/glitch-astra-starter#prerequisites](https://github.com/DataStax-Examples/glitch-astra-starter#prerequisites)

<!--- STARTEXCLUDE --->
# Running the Glitch Astra Starter
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-glitch-react-express-starter) if you don't 
already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

7. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

8. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/glitch-astra-starter):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Glitch](#running-on-glitch)

### Running on your local machine
1. `cd` into the cloned repository. Install Node dependencies with `npm install`.
2. Add your Astra database connection information into a `.env` file in the root of the project (copy the keys from the .env-example file).
3. Start your app by running: `npm start`

### Running on Glitch
1. Login to or create a [Glitch](https://glitch.com) account.
2. Start a new project using the github repo that you created above.

![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/glitch-new-project.png)

3. Add your Astra database connection information into the `.env` section provided by Glitch. 

![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/glitch-env-vars.png)

<!--- ENDEXCLUDE --->