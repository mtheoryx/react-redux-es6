# Specific versions for the course:

- ES2015 (ES6)
- React (15.0.2)
- Router (2.4.0)
- Redux (3.5.2)
- Babel (6+)
- Babel polyfill
- Webpack (1.13)
- nvm
- Node 6+

# The many ways to create a React Component

- ES5 createClass
- ES6 class
- ES5 stateless function
- ES6 stateless function
- And many more...

## When to use each style?

### Class Component

- Need to use State
- Need to use Refs (reference to underlying DOM)
- Any Lifecycle hooks
- Child functions (for performance)

### Stateless Component

- Everywhere else!

## Container vs Presentational Components

### Container

- Little to no markup
- Pass data and actions down
- Know about redux (actions/dispatch)
- Often statefull

### Presentational

- Nearly all markup (dumb, no logic)
- Receive data and actions via props
- Doesn't know about redux, actions, dispatch
- Typically, functional components

### Jargon Explained

| Container       | Presentational |
| --------------- | -------------- |
| Smart           | Dumb           |
| Statefull       | Stateless      |
| Controller View | View           |
