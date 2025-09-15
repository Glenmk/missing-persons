# Missing Persons Tracker

## Overview

A web application to track missing persons. Users can view a list of missing persons, add new entries, and view details for each person.

## Features

*   **View Missing Persons:** A gallery view of all missing persons.
*   **Add Missing Person:** A form to add a new missing person with their name, age, last seen location, and a photo.
*   **View Person Details:** A detailed view of a missing person with the option to mark them as found.
*   **Responsive Design:** The application will be responsive and work on both desktop and mobile devices.

## Project Structure

```
src/
|-- app/
|   |-- create-missing-person/
|   |   |-- create-missing-person.component.ts
|   |   |-- create-missing-person.component.html
|   |   |-- create-missing-person.component.css
|   |-- missing-person-card/
|   |   |-- missing-person-card.component.ts
|   |   |-- missing-person-card.component.html
|   |   |-- missing-person-card.component.css
|   |-- missing-person-detail/
|   |   |-- missing-person-detail.component.ts
|   |   |-- missing-person-detail.component.html
|   |   |-- missing-person-detail.component.css
|   |-- missing-person-list/
|   |   |-- missing-person-list.component.ts
|   |   |-- missing-person-list.component.html
|   |   |-- missing-person-list.component.css
|   |-- app.component.ts
|   |-- app.config.ts
|   |-- app.routes.ts
|   |-- missing-person.model.ts
|   |-- missing-persons.service.ts
|-- index.html
|-- main.ts
|-- styles.css
```
