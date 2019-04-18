![alt text](https://cdn-images-1.medium.com/max/1200/1*EdiFUfbTNmk_IxFDNqokqg.png)

## Redux is a principle of organizing your applications code structure

Redux is great at bringing a maintainable structure to angular projects. But it also brings a LOT of boilerplate code.

In this tutorial, you will not only learn the details of the Redux architecture, you will also learn, how to implement Redux into your own angular applications.

## State in Angular

In angular, it is also possible, to pass objects between components. This can be done using the @Input & @Output decorators or via a shared service. Either way, keeping track of which components alters the state becomes an impossible task quite quickly. Especially when working with a big application and/or team.

## Resolving the Chaos with Redux

Redux promises to resolve the issues mentioned above, by saving the state in one single object, called the store.
”The only way to change the state is to emit an action, an object describing what happened.”

## Read-Only State

Everything saved in the store is read-only.

## Should you use Redux in your Angular Project?

- If you would call your application “tiny” or “small”, I would suggest not to waste a thought on using Redux.
- If your application is going to be “large”, “huge” or “monolithic”, on the other hand, Redux can bring some huge benefits to the table, that are definitely worth considering. You probably should use Redux here.

## NgRx

Collection of reactive libraries for angular, containing a redux implementation and many other useful libraries.
In this tutorial, we are going to use ngrx to build an example application featuring the redux store and asynchronous effects.

## Actions in Redux

If you are familiar with events, actions are quite simple to understand. Because they are just that. They report that something happened. Nothing more. Actions do not describe, how the state has to be changed.

## Reducers in Redux

Now that we have events in form of actions, we need corresponding event listeners. These listeners are called reducers. These reducers are the only structure that is allowed to alter the state. All state changes are implemented inside of reducers.
After all, a reducer is just a function. It takes the current state and the action as parameters.

## Dealing with Side-Effects (ngrx/effects)

As you may have noticed through this tutorial, that side-effects are considered “evil” in the ngrx ecosystem. But sometimes, they can not be avoided.
The most common example of a side effect is a HTTP-request. We make it at some point, but we don’t know when it comes back. It is an asynchronous operation. To deal with this kind of side-effects, the ngrx team has created a module called ngrx/effects.
The goal of this module is, to wrap the side-effects and isolate them from the rest of the code.

Slide presentation about the Redux in Angular with NgRx Store on https://docs.google.com/presentation/d/1adYIiJLUQaaHBRMKbghRePR17RC97lHwxAzJqW3WU18/edit?usp=sharing

## Store DevTool extension

Install Chrome store devtool extension https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

# NgrxTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
