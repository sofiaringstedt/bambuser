# Technical assignment
The goal of this assignment is to complete as many tasks as possible listed below in the TODO list. 

## Scenario
A developer has built a landing page for a Live Video Shopping event, but there are still bugs to solve and improvements to make before the page can be used in production. We need you to update the code and fix the tasks listed in the TODO list further down on this page so everything is working as expected once launched. 

## Expectation
Here is the specification and high-level requirements for this landing page.

On this landing page, we are going to promote a Live Video Shopping show. 

The landing page consists of:
- **A countdown:** A graphical countdown. We should be able to set the date and time of the event. The countdown should disappear when done.
- **A header:** This header should have the value of 'We go live in' before the countdown is done. After the target time is passed, the value of the header should be 'We are live!'.
- **A CTA element:** A card including an image and a button. The whole card should be clickable and trigger the Bambuser Player with a recorded test show.

## Test the current behavior
### 1. Run the project
You are able to run the current project in either way below:
 - In the terminal, run `yarn start` within the project working directory 
 - Or, open the `src/index.html` in a browser

### 2. Modify the target time
In order to test the countdown on different occasions, in the `src/index.html`, you need to update the `data-date` and `data-time` to a closer time (e.g. current time + 1 min). So you can see how the count down behaves when it reaches the target time.
## TODO
  - [x]  Make the countdown loop stop once it reaches the target time. Currently, the countdown continues with minus values. 
  - [x]  Make the countdown element disappear after the target time is reached.
  - [x]  The CTA element should show up when the countdown is done.
  - [x]  The default font for the landing page is set to `Neue Haas Grotesk Display`, but the font is not applied. Investigate why and provide a solution.
  - [x]  Center the `wrapper` element by modifying the CSS. The `wrapper` element is not fully centered (It is horizontally centered but not vertically). 
  - [x]  The header text must be changed to 'We Are Live!' when the countdown is done.

## Questions
Once you have fixed the CTA button, you should be able to click it. On click, the Bambuser One-to-many player will be opened. When clicking a product in the player, you will see an error page. We need you to explain as much as possible in the field further down: 
   - What is the error?
   - Why does it happen, what is the reason for this error?
   - Potential solution(s)?

### Answer
      Place a brief explanation here. You can explain this further during the technical interview.
- The error is due to a same-origin policy setting, not allowing other origins/scripts than your own to interact with your script. So, this is happening because you are trying to navigate to another website within the <iframe>. The iframe only allows to display content from the same origin as the parent/main website.
- There are a lot of security risks related to opening website within and the default setting is therefore set to "X-Frame-Options: SAMEORIGIN" (as seen in the error message in console). One of the biggest reasonings behind same-origin-policy is to avoid clickjacking (a user thinking they are clicking on/navigating to one website, but they are in fact directed to another one).
- There are a lot of good reasons behind same-origin-policies, but as seen in this example it quickly becomes a bit too strict. What I would approach in order to work around the issue while keeping the security SOP provides is CORS. With CORS you can allows other origins to interact with your script. My initial idea would be to allow requests from https://demo.bambuser.shop/ and its paths.

See how to reproduce the error: [Video](producing-iframe-error.mp4)




## How to deliver the assignment
- You will receive the assignment in a `.zip` file that you can unzip and start working on it.
- Make sure you read the README.md carefully before you start working on the tasks.
- *Would be nice* to use Git and commit your changes. You can use your local Git repository or a private remote repository.
- When you are done, make a zip archive of your project, including the .git directory *in case you chose to use Git*.
- There is no right or wrong, so, feel free to be creative while delivering the expectations.
- If you have any questions, reach out via email.