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
- Non-hierarchical data
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

### Similarities

- Both have unidirectional data flows.
- Both use finite set of actions to mutate state.
- Both have a concept of a store

### Differences

#### Redux
- Redux take the current state, an action, and return a new state. They
are pure functions.
- Containers (container components) manage marshalling actions and state,
which they then pass down to, typically, dumb, stateless, functional
components via props.
- Immutability. The Redux store is truly immutable.

#### Flux

- Flux has 3 core concepts: actions, dispatchers, and stores.
- Flux uses a singleton dispatcher
- Flux uses event emmitter for each store to connect to the dispatcher.
- Redux doesn't use event emmitter at all. Instead, it relies on
pure functions called reduces.

#### Specific Differences

| Flux       | Redux |
| --------------- | -------------- |
| Stores contain state and change logic | Store, change logic are separate |
| Multiple Stores | One store |
| Flat and disconnected stores | Single store with hierarchical reducers |
| Singleton Dispatcher | No Dispatcher |
| React components subscribe to stores | Container components use connect |
| State is mutated | State is immutable, you have to return a new state |

## Full redux flow

Actions describe user intent. Actions always have a type. The data can be
any form you need. But there must be an action type.

That action is ultimately handled by a reducer. It's really just a function
that returns new state.

Reducers typically container a switch statement.

The store is updated, and any components connected to the store are
automatically updated via Virtual DOM diffing.

# Actions, Stores, reducers

## Actions

- Must have a type
- Data can be whatever you want, as long as it is serializable.
- Use action creators

## The Store

- createStore function, and you pass a reducer for the store
- A single store is not a limitation. It is a single source of truth
- No api for changing data in the store. Must use an action.
- Actions are only handled by reducers.

## Immutability

- To change state, return a new object, simple as that.
- Number, string, boolean, undefined, null... already immutable.
- Objects, arrays, functions... mutable!
- Redux relies on immutable state for performance
- Use Object.assign(target, ...sources)
- Example Object.assign({}, state, {role: 'admin'});

## Reduces

- Reducers accept the current state, and an action. It returns new state.
- Each reducer only handles it's slice of state.
- If an unknown action is passed to a reducer, the current state is reduced
- Reducer composition: An action can be handled by some, none, or all of
  your reducers.

# Connecting React to Redux

## Provider

```jsx
<Provider store={this.props.store}>
  <App />
</Provider>
```

**Note**: React's context is useful for library authors, but dangerous for you
as the developer.

## Connect

```jsx
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorPage);
```

### mapStateToProps

Defines what slice of the store will be exposed to your
container components.

```jsx
function mapStateToProps(state) {
  return {
    appState: state
  };
}
```

#### Reselect

Memoize for performance. It's like cacheing for function calls. Especially
useful if you're doing expensive options in your mapStateToProps function.

### mapDispatchToProps 3 ways to handle in react-redux

1. Omit it. You can use dispatch() manually.

```jsx
this.props.dispatch(loadCourses());
```

2. Manually wrap

```jsx
function mapDispatchToProps(dispatch) {
  return {
    loadCourses: () => {
      dispatch(loadCourses());
    }
  };
}
```

3. Use bindActionCreators, convenience method for option 2

```jsx
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
```

Option 2 is great for getting started, but has a lot of redundancy, so you
will eventually want to use option 3.
