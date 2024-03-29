### 349-project

```cpp
PROJECT TEAM NAME: Vanilla

PROJECT NAME: Quiz Central

MEMBERS:
  1. Kenny Tran
  2. Kevin Espinoza
  3. Brian Lucero
  4. Andres Jaramillo
```

# Quiz Central

Project Host URL: https://personality-quiz-projec.web.app/index.html

## Contents:

**Main Project**
 1. [Introduction & Summary - Brian](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#introduction---brian)
 2. [Styling Quiz Central - Kenny](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#styling-the-quiz-central-app--kenny)
 3. [Engineering the results.js and quiz logic - Kenny](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#engineering-the-resultsjs-and-quiz-logic---kenny)
 4. [Connecting Quiz Central to a Firestore Database - Kevin](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#connecting-to-a-firestore-database---kevin)
 5. [Hosting the app on Google Firebase - Kevin](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#hosting-the-app-on-google-firebase---kevin)
 6. [Designing & Developing the quizzes - Brian & Andres](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#designing--developing-the-quizzes---brian--andres)
 7. [Brief demonstration - Kevin](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#brief-demonstration---kevin)
 8. [Overall Project Experience - Brian](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#overall-project-experience---brian)


**User Manual** -- *Documentation*:
 - [Installation](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#installing-quiz-central)
 - [Configuration](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#configuring-quiz-central)
 - [Using the Application](https://github.com/ktranfullerton2000/349-project/blob/main/README.md#using-quiz-cenrtal)


# Introduction - Brian

  For the CPSC 349 project, Team Vanilla concluded on developing the personality quiz application concept. So, we created Quiz Central. Quiz Central is a Web Application that allows a user to take one of four personality quizzes. It includes quizzes that determine a Snack, Star wars character, Squidgame shape, or Spirit Animal, depending on given input from the user. This input is also recorded in a Firestore database if the user chooses to save the data under a given name. 
  
  
***Features List:***
  1. Multiple HTML Files & button navigation across multiple webpages
  2. A detailed Styling sheet (CSS)
  3. Connection to a FireStore Database
  4. Hosted on Google Firebase --> `https://personality-quiz-projec.web.app/index.html`
  5. A Javascript file for the quiz logic, and another JS file to drive the program logic
  6. Plenty of original Quiz design and content, aided by free web photos and illustrations


![91CAA09D-4526-4FF4-98E6-06F11249623D_4_5005_c](https://user-images.githubusercontent.com/47013770/140549957-3a1ec779-9e60-4a13-80db-406eda0bd356.jpeg)


#### View of the Home page

![0B55AA75-7334-4822-B433-C14647706204_1_105_c](https://user-images.githubusercontent.com/47013770/140525289-4e97ccb6-e45e-4bf7-8d13-a8619dca8f81.jpeg)


***Why this Project?***

  > The Quiz Central concept was incepted by Kenny and Kevin mainly, 
  > in efforts to finally just decide on *something* to start working on, 
  > and give it our best shot. At the time, it seemed most suitable and 
  > relatively simple to develop quickly.


***User Experience?***

  > **Click on the following link and try it out!**
  > 
  >  - https://personality-quiz-projec.web.app/index.html 
  > 
  > **Youtube Video Demo** - check out this 2 min walk through video of the project:
  > 
  >  - https://youtu.be/nbqCJ0ABFog 


# Styling the Quiz Central App- Kenny

- Each page of the site utilizes the same header and footer classses.
- The Quiz includes certain css logic that allows for the "Pick an image" questions and the buttons on the top left.
- The index file also includes certain css logic for the card elements.

# Engineering the results.js and quiz logic - Kenny

- First the results are gathered and is added as indexes to a array called score.
- Then all of the question results are gathered and the score is added depending on its respective results.
- Then it finds the result with the highest score and creates the output accordingly, by hiding and revealing certain elements.

# Connecting to a Firestore Database - Kevin

- Set up a Firebase Project for your website. 
- After creating a new Project, Firebase will give you some code to add to your source code.  
- Create a database within your new Firebase Project under Firebase Datastore and make sure the code to connect to it is in your source code. Firebase will give you this and go   through the directions for you. From here you should be able to manipulate your Firestore Database remotely from your website. 

# Hosting the app on Google Firebase - Kevin

- First, have a project set up for the website you'd like to host. If you plan to have a database, make sure Firebase Firestore is set up with your local website. 
- Follow Google's directions for hosting your website on Firebase. 
- After setting up your environment, simply past your source code into the folder created by Firebase and run firebase publish. From here you'll be given a url for your fully     hosted site. 

# Designing & Developing the Quizzes - Brian & Andres

- Initially worked on creating a working quiz template, thus completing the first quiz, snacks.
- Using the snacks quiz template, we made more content for the rest of the quizzes
- Each quiz has its own HTML, and they are all linked together in the index.html

#### Gifs of the Quizzes in action:

![F2362583-8C69-456B-BD38-CFA3861D650F](https://user-images.githubusercontent.com/47013770/140545948-37a28597-ba54-44c9-880b-4d3d9435a7d0.gif)

-----------------------------------------------------------

![darth](https://user-images.githubusercontent.com/47013770/140548194-ac499826-ed34-49f3-a4bd-6ad102874130.gif)

-----------------------------------------------------------

![5D22457F-10B7-481C-B56E-745DCAE01A3C](https://user-images.githubusercontent.com/47013770/140545983-51f09727-50f0-4429-8b65-0b426dbf01d2.gif)

-----------------------------------------------------------

![3C29FA2A-8D51-4E42-8721-0214449144E8](https://user-images.githubusercontent.com/47013770/140545994-2744ea99-ce58-48ed-8b22-ba9783bc8957.gif)

-----------------------------------------------------------

# Brief demonstration - Kevin


#### [Quiz Central](https://personality-quiz-projec.web.app/index.html)


# Overall Project Experience - Brian
- At the very start of forming the team, we decided to reference the grading rubric and structure our goals closely to the outlined factors.

Goals going into the project | Effort | Goal Met? 
---------------------------- | ------ | ---------
Well-prepared Presentation and equal participation | Good | Yes
Comprehensive & quality Documentation | Good | Yes
Project scope functionality - Application of course concepts and technology | Fair | Yes
Code Quality | Good | Yes
Innovation & Web Design | Decent | Yes, but maybe still room for improvement
Teamwork & Effective Team Communication | Good | Yes

## In conclusion:

We made a fully functional project, called Quiz Central

  - A Web Application that can lighten the mood with some silly quizzes 
  - Morover, also proved to be a useful team collaboration exercise within Front End Engineering

-----------------------------------------------------------

#####  *User Manual* -- *Documentation*

## Installing Quiz Central *(locally)*
`Step by step...`
  
  1. Navigate to URL: https://github.com/ktranfullerton2000/349-project
  2. Click the `green` button named `code`
      - you can either download as a zip file
      - or you can clone the repo as your own 
      
  ![DEF45AB6-486E-4E9B-9991-F81F805AFED9_4_5005_c](https://user-images.githubusercontent.com/47013770/140559204-cf273dfb-349e-4741-a606-98dc120c959e.jpeg)
  
## Configuring Quiz Central
#### `... set-up tips for local instances`

- It's recommended to run the project using Live Server in Visual Studio Code

## Using Quiz Central

`If you are confused...`

- Click on the following URL: [Quiz Central :)](https://personality-quiz-projec.web.app/index.html)
- After the Home page loads, choose a quiz to play by clicking on it
- Answer the questions, submit, and await your shocking results


-------------------------------------------


```python
                                       +---------------------------------------+
                                       |                                       |
                                       |   ┏━━━┓╋╋╋╋╋╋╋╋┏━━━┓╋╋╋╋╋┏┓╋╋╋╋╋┏┓    |
                                       |   ┃┏━┓┃╋╋╋╋╋╋╋╋┃┏━┓┃╋╋╋╋┏┛┗┓╋╋╋╋┃┃    |
                                       |   ┃┃╋┃┣┓┏┳┳━━━┓┃┃╋┗╋━━┳━╋┓┏╋━┳━━┫┃    |
                                       |   ┃┃╋┃┃┃┃┣╋━━┃┃┃┃╋┏┫┃━┫┏┓┫┃┃┏┫┏┓┃┃    |
                                       |   ┃┗━┛┃┗┛┃┃┃━━┫┃┗━┛┃┃━┫┃┃┃┗┫┃┃┏┓┃┗┓   |
                                       |   ┗━━┓┣━━┻┻━━━┛┗━━━┻━━┻┛┗┻━┻┛┗┛┗┻━┛   |
                                       |   ╋╋╋┗┛                               |
                                       |                                       |
                                       +---------------------------------------+
```                                                      
