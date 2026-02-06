## Features

###  Controlled Form Inputs
- The Title and Description fields are **controlled inputs**.
- Their values are stored in React state using `useState`.
- Each input updates state with `onChange`.

###  Form Validation
Validation runs when the user submits:
- Title must not be empty
- Description must not be empty  
(Uses `.trim()` so spaces don’t count as valid input)

Error messages display under each field when validation fails.

###  Submit Handling
- The form uses `onSubmit={handleSubmit}`
- `event.preventDefault()` prevents page refresh
- On successful submission:
  - A new project is created and added to the list
  - The form clears
  - Errors are cleared

###  Multiple Projects Display
Instead of storing one submitted item, the app stores many projects in an array:
- New projects are added to the top of the list
- Projects render using `.map()`

###  Search Projects
A search input filters projects in real time:
- The list updates based on the search keyword
- Search matches project titles (can be extended to description too)

###  Toast Notifications
Uses `react-hot-toast` to show success messages after adding a project.