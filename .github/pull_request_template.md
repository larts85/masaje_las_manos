## Photo or video showing UI changes (if any)

## Description

A few sentences describing the overall goals of the pull request's commits. Include relevant motivation and context. List any dependencies that are required for this change.

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update.

# Keep this guide in mind to review and auto-review PR code.

## Nomenclatura y convenciones.

- [ ] Use camelCase to name variables and functions.
- [ ] Use PascalCase to name components in React.
- [ ] Use descriptive and consistent names for all variables, functions, components and files. DO NOT USE A SINGLE LETTER TO NAME VARIABLES. eg: `error => e` , `index => i`.
- [ ] Use eslint and prettier to keep bug cleanup. DO NOT LEAVE ESLINT WARNINGS UNSOLVED.
- [ ] Vary all numbers and text strings. DO NOT ENTER MAGIC STRINGS, OR MAGIC NUMBERS e.g.:

  `'template_discount'` => `ACTION_TYPES.TEMPLATE_DISCOUNT`
  `if (age > 18)` => `if (age > AGE_ADULTHOOD)`

## Modularization and code reuse.

It is important to modularize the code into reusable modules or components to avoid code repetition and improve the readability and maintainability of the project.

- [ ] Separate presentation logic and data logic into different components in React.
- [ ] Do not use `useEffect` inside the component but move it to a custom hook either inside or outside the file in question.
- [ ] Use utility functions or external libraries to avoid code repetition.
- [ ] Avoid using impure functions.

## Documentation and comments.

- [ ] Write clear and concise comments to explain the **why** and NOT the **what** of code sections, only when really necessary. _In general lines, a good nomenclature should be enough to understand the code._

## Automation tests.

- [ ] Use the real store when developing tests as much as possible (avoid using `'redux-mock-store'` ).
- [ ] Write tests for all functions and components of the project.
