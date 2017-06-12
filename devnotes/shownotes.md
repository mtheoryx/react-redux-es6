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

# Components, initial app structure, etc

There was a limitation at around react v15 where you need to have
some top level class component in order to have hot reloading for
child stateless functional components.

Webpack can load css into components with imports.

If you change the top level html file, webpack won't pick
that up for hot reloading, so you need a manual refresh.

## Hot reload js files

Webpack and HMR will pick up new JS files, and will continue
to pick up changes to the new file, no reload needed.

# Intro to Redux

## Do I need redux?

VanillaJS -> jQuery -> React -> React + Router -> React + Redux + Router
---
Simple (no setup) -> Complex (significant setup)

- Complex data flows
- Inter-component communication
- 2 components manipulating the same data
- Non-heirarchical data
- Many actions
- Same data used in multiple places

---
"...If you aren't sure if you need it, you don't need it."

Pete Hunt on Redux
---

## 3 Core Principles

1. All application state in a single immutable store
2. The only way to mutate state is to emit an action
3. State is changed only by pure functions (reducers)

## Flux vs Redux

## Full redux flow
