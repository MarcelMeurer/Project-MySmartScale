# Project MySmartScale - Community version

This repo provides the community version of "Project MySmartScale". The community version manages up to five workers. This version is as-it-is without support. For a supported version with more then five managed workers contact my employer (sales@sepago.de).

## What is Project MySmartScale

This project gives answers to a very important challenge regarding Windows Virtual Desktop or Citrix Virtual Apps and Desktops in Azure: In a cloud environment, virtual machines are paid based on “switched on” time – even if the resources are not in use. Managing the execution of session hosts is crucial for resource-efficient IT.

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

**Build for shared hosts**

- Windows Virtual Desktop
- Citrix Virtual Apps and Desktops running in Azure as IaaS (without Citrix Cloud)

### How does it work?

Project MySmartScale gets information from the session host called workers. The data include information about connected and disconnected sessions, the load of the worker and some other information. This data are summarized by the ControlUnit which  starts and deallocate workers fitted to the current and expected usage of the environment. If the ControlUnit runs over a long time the CU can predict the session count for the next time and can pre-start the worker. With this prediction method, you have the right count of workers running if the users try to logon (to handle a "logon storm").

Project MySmartScale based on Azure platform services:

![](D:\DEV\GitHub\Project-MySmartScale\media\Architecture.png)

## Installation and configuration

### Azure services

Press the deploy to Azure button on the bottom to deploy the resources into your subscription. Make sure that you enter a worldwide unique name for your deployment. Some ressources need to be unique.

Create a secret SQL database password for your deployment. **Do not** leave this field as it is.

The following Azure resources are deployed:

- SQL database for the data
- Log Analytics workspace for the application log
- One web plan with two web sites:
  - -data as the data endpoint
  - -portal website for configuration
- some other resources supporting the deployment

 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FMarcelMeurer%2FProject-MySmartScale%2Fmaster%2Ftemplate.json" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/>

#### Create the Azure AD service principals

##### Administration portal

Use the Azure portal and navigate to Azure Active Directory -> App registrations -> New registration

Enter a name for the service principal (in my case I used svc_WVD_PortalAuthentication) and click register.

Configure the service principal:

Set checkbox “ID tokens” and save:

![CreateSP-Portal-02](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-02.png)

Certificate and secrets: Client Secrets -> New client secret

And copy the key for later (in my case: Rxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx)

![CreateSP-Portal-03](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-03.png)

![CreateSP-Portal-04](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-04.png)

Add permission for the application to read the users profile and group membership.
Add a permission -> Type: Application -> Graph API -> User.Read.All

![CreateSP-Portal-05](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-05.png)

After this an admin has to consent to that permission:

![CreateSP-Portal-06](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-06.png)

Edit the manifest of the service principal (to allow reading usergroups). Change "groupMembershipClaims" to "SecurityGroup":

![CreateSP-Portal-07](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-07.png)

Copy from overview:
Application (client) ID:	760890f4-da87-4654-b235-xxxxxxxxxxxx
Directory (tenant) ID: 	1dd9bdbf-f4ac-4244-9415-xxxxxxxxxxxx

![CreateSP-Portal-08](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-08.png)

Finally go to the Service principal and change callback URI to your deployment Uri / name. In my case:
https://**wvd-mysmartscale-portal**.azurewebsites.net/.auth/login/aad/callback

![CreateSP-Portal-01](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-01.png)

##### Automation account for the VMs

Use the Azure portal and navigate to Azure Active Directory -> App registrations -> New registration

Enter a name for the service principal (in my case I used svc_WVD_VmAuthentication) and click register.

Configure the service principal:

Go to Certificates & secrets -> New client secret -> type a name and select the time the key is valid:

Press “Add” and copy the key for later.
Bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

![CreateSP-VmStartStop-01](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-VmStartStop-01.png)

![CreateSP-VmStartStop-02](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-VmStartStop-02.png)

From the overview copy:

Application (client) ID	66b55744-4573-408d-81e1-xxxxxxxxxxxx
Directory (tenant) ID	1dd9bdbf-f4ac-4244-9415-xxxxxxxxxxxx

Go to the resource group (or groups) containing your VMs and add the service principal:
Access control -> Add -> Role assignment 
Role: Virtual Machine Contributor
Select: Name of the service principal
Click -> Save

![CreateSP-VmStartStop-03](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-VmStartStop-03.png)

#### Configure the Azure resources with the service principals

##### Web Application

Enter the data from the portal service principal into the portal configuration. Go to the deployed resources and open the web app ending with "-portal". Open configuration and change the following values:

- ida:ClientId
- ida:ClientSecret
- ida:Domain	your Azure AD tenant id
- ida:TenantId	your Azure AD tenant id

Press save:

![CreateSP-Portal-09](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Portal-09.png)

Important and recommend: Configure the security for the portal: Add a group id containing the administrators to allow login. If you don't do this: Everybody in your Azure AD **can logon and read the client secret** for the automation account.

![CreateSP-Data-AdminGroup](D:\DEV\GitHub\Project-MySmartScale\media\CreateSP-Data-AdminGroup.png)

##### Basic configuration in the portal

Start the Project MySmartScale portal and configure the basics. Add the service principal, secret and Azure AD tenant id you previously created (to start and deallocate the VMs).

The portal Uri is (use your deployment name): https://**wvd-mysmartscale-portal**.azurewebsites.net

Login and go to configuration.

Enter the service principal data from your automaton sp:

![MSS-Portal-01](D:\DEV\GitHub\Project-MySmartScale\media\MSS-Portal-01.png)

Additionally: Generate a secret passphrase (without quotes) and add it into the key field: Don't use the generated passphrase. This passphrase is later for the configuration of the agent.

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

Set the EndPoint-URI to the Uri of your **-data** web app appendet with /data: https://**wvd-mysmartscale-data**.azurewebsites.net/data

Set the EndPoint-Key to the value you have configured in the configuration (see above).

### Configuration in the portal

Check, if you can see the data from your worker

#### Add a new site for autoscaling the VMs

##### Configure ScaleParameter

##### Configure active logoff conditions

##### Configure schedules

##### Configure allways off conditions





---> under construction. The documentation is in progress.....



## Deploy to Azure

 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FMarcelMeurer%2FProject-MySmartScale%2Fmaster%2Ftemplate.json" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/></a>

