# Game of Tasks

Not really a game, more like a GOT themed todos/task list

[**VIEW DEMO**](https://flamboyant-lovelace-be214d.netlify.app/)

## Features

-   Add/edit/remove task
-   Toggle filters to show complete/uncomplete task
-   Toggle check/uncheck all
-   Clear all tasks

## Tech

-   html
-   css
-   javascript
-   React

## Goals

-   Try out React's context API + useReducer to implement a global state
-   Put a new spin on the typical todo list

### Notes/observation

-   Re-rendering with context API is not efficient as using Redux.
-   Any state change will cause every component to re-render even if that component does not use state via useContext()
