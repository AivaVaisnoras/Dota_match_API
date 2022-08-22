# Dota Match API task
## Overview
The task was done in the spirit of spending minimal time, most proposed changes are added as comments but the general overview
is that the project needs restructuring and a more robust state implementation such as redux. 

## Known issues
The current state management has an unresponsive and unstable navigation due to rough state handling between components.
If the page does not load the table, a refresh is needed to reset the state.
Because no error handling is present, rejected requests (status 429) are not notified to the user.
The code also lacks any proper error handling or testing.
Theming and styles are inconsistently implemented.
Some types are set poorly and need a proper definition.

## Additional changes
Restructure component layout and use of child/parent components.
Implement a global state management solution such as Redux
Unify styling to use MaterialUI styles and apply them to a per-component basis 
Add error handling and proper error messages to individual components
Add unit tests to functional components.