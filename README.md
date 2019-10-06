# Deploy to Azure

 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FMarcelMeurer%2FProject-MySmartScale%2Fmaster%2Ftemplate.json" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/></a>




 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FMarcelMeurer%2FProject-MySmartScale%2Fmaster%2Ftemplate.test.json" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/></a>



# Project MySmartScale

This repo provides the community version of "Project MySmartScale". The community version manages up to five workers. This version is as-it-is without support. For a supported version with more then five managed workers contact my employer (sales@sepago.de).

## What is Project MySmartScale

This project gives an answers to a very important challenge regarding Windows Virtual Desktop: In a cloud environment, virtual machines are paid based on “switched on” time – even if the resources are not in use. Managing the execution of session hosts is crucial for resource-efficient IT.

Project MySmartScale starts and smartly deallocates session hosts. It learns about the user’s behavior and actively logoffs sessions at the right time to save compute power – and money. This solution is 100% based on Azure platform services. 

### Some features:

**Allocate session hosts before they are needed**

- Predict and prepare the right count of session hosts before users try to logon
- Scale the session host count based on the real workloads of the past (learned)
- Handle special weekdays (Sat./Sun) and public holidays

**Logoff disconnected users actively if possible – by pre-defined rules**

- Prevent logoff based on typical working hours
- Roaming times (e.g. drive home after work) -> prevent logoff
- In the afternoon -> logoff disconnected session faster

**De-allocate session hosts**

- De-allocate session hosts automatically

**And more**

- Configuration and monitoring via web service
- Schedule session host count (important for starting a new WVD environment)
- For a shared/pooled session host environment at the moment 
- Realistic savings: 60-70% (savings!) in a shared environment for a normal 10 business hours a day      company with no shifts regarding 24/7 runtime of the session hosts

### How does it works?

## Installation and Configuration

### Azure services

Press the deploy to Azure button on the bottom to deploy the ressources into your subscription. Make sure that you enter a worldwide unique name for you deployment. Some ressources need to be unique.

Create a secret SQL databse password for your deployment. Do not leave this field as it is.

The following Azure resources are deployed:

- SQL database for the data
- Log Analytics workspace for the application log
- One web plan with to web sites:
  - -data as the data endpoint
  - -portal website for configuration
- some other resources supporting the deployment

#### Create the Azure AD service principals

#### Configure the Azure resources with the service principals

Starte the Project MySmartScale portal and configure the basics

### Worker Agent

Each WVD session host needs an agent. The agent is located in this repo: bin/WorkerAgent

Copy the files to your WVD session host master image in a folder. E.g: C:\Program Files\SmartScaleAgent and make sure that only admins can access this folder.

Configure the agent by editing ITPC-MySmartScale-Agent.exe.config

```xml
 <appSettings>
    <add key="EndPoint-URI" value="Enter the https endpoint address of your MySmartScale data instance starting with https://your-installation.azurewebsites.net/data"/>
    <add key="EndPoint-Key" value="Enter the generated key of your MySmartScale configuration (visit the portal site)"/>
     ....
```

Set the EndPoint-URI to the uri of your -data web app appendet with /data

Set the EndPoint-Key to the value you have configure in the configuration (see xxx)

