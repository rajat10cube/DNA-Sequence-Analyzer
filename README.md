# Forward-Health-Tech-System

### Prototype :
https://marvelapp.com/prototype/d1fb80i/screen/83296921

## Architecture Diagram
![Forward HealthTech](https://github.com/rajat10cube/cloud-frontend/blob/main/Cloud%20Project%20Architecture%20(2).png)

### Project Description: 
The project deals with solving the global pandemic using Cloud-based services like S3, Lex chatbot, Sagemaker, Lambda, API gateway, Cognito, AWS Web, ECS for containerization. The facility will be provided to the patient at the comfort of their home. The idea is to provide appointment booking, DNA sample collection, and a report delivery mechanism to the end-user. There will be various stakeholders using this application. They are as follows, the Patient User, the DNA sample Lab user, the Sample collector, and the Doctors or Government Department to whom the positive reports will be sent.
Patient users will be able to interact with the chatbot, they will converse with it about any symptoms or ailments they are encountering which can be hazardous, they can also book their sample collection appointment using a chatbot. A sample collector personnel will be assigned to the address of the user, upon successful collection, the sample will be sent to our lab dashboard user, where the DNA genome sequence pattern recognition algorithm will be deployed to perform analysis on the collected sample data. And the lab can use the collected data to provide the findings to the patient-user using email and SMS services as a pdf file. If the reports are found similar to any COVID-19 variant, the patient will be informed and it will be sent to the government health care department as well so that a disease-specific line of action for the treatment can be facilitated.


### Motivation: 
Many professions, including medicine, have been substantially impacted by the development of mobile computing devices. Health care providers now use smartphone or tablet computers to perform tasks that formerly required a pager, cellphone, or PDA. Mobile device models offer more complex functionality, such as web searching, global positioning systems (GPS), high-quality cameras, and sound recording, in addition to speech and text.
We are using these features to facilitate sample collection and report delivery tasks to each and every point of contact in the healthcare industry system and to the patients with limited access to quality health care.


### Product features:
Replicating the conventional mobile app functionality via Messaging apps like WhatsApp, Telegram.
We will be using AWS functionalities like - S3 for web hosting, Lex service for COVID-19 based chatbot, Sagemaker for ML-based model deployment and training, Lambda for writing python script, API gateway for creating web-based APIs, Cognito for Login-Signup functionality, AWS Web sockets for live chat, ECS for containerization.
SMS and email services will be deployed for the pdf report delivery using Twilio.

### Data Sources: 
NCBI web database - https://www.ncbi.nlm.nih.gov/ 
