# Airtable Take-home Challenge: Job Listings

## Description

This is a demo version of the Job Listing site for Airtable. I worked on this project for a total of 8 hours over the last several days. 

## Tech Stack

The demo was built using React and several built-in hooks, most notably the useContext hook. I used create-react-app to bootstrap I was able to spin up the application quickly. By using the context hook I was able to manage state for the entire app without pass props between components. Along with React I am using standard CSS for styling.

## Additional Considerations

The data is being pulled directly from the Dropbox link provided. The hyperlinks associated to each listing do not actually work though they are set to the url specified in the instructions (https://airtable.com/jobs/[job_role_id_here]). 

I was able to identify a strange quirk in the font-family provided. If a word contains the letters "TM", the font would somehow convert those letters to a superscript to resemeble the 'Trademark' symbol. 

## Future plan

#### Accessibility
- With more time I would incorporate accessibility by making the site keyboard-friendly. I especially would focus on remaking the dropdown menus. I might use the native Select library which has accessibility features built-in. I would also give the user the ability to toggle through the job-listings and switch focus via the keyboard. 
- I would also improve the markup by including more semantic HTML tags like section, main and article where applicable.
#### 
