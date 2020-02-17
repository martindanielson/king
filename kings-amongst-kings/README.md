## Captains log, startdate 203412321

I used the [Create React App](https://github.com/facebook/create-react-app) as a base for the assignment. Since _Fredrik_ mentioned _Styled Components_ I wanted to make use of it in the assignment; both coding and learning at the same time. This choice did add some extra overhead in terms of time, but has given me a solid understanding of the concept and its capabilities.

Another thing I wanted to do was to keep it fairly light and not use Redux; using React's good old Context instead. Interesting way to solve it and looking at hooks in general it feels like it might be a light-weight version of Redux part of the core React package. Of course, there are yet things to see in a real-world application where the code-base is a lit bigger; but pretty nifty to see something a lot less "chatty".

Given the above endeavours I needed to cut out a few things in order to spend reasonable time on this. I did not use Type Script and I would have loved to spend some more time on the (a) test framework. Hopefully you can trust that I will add this at a later stage; given the opportunity. I also wanted to write a lean Node.js app to serialize the state but since the focus is on front-end I hope this wont be held against me. Finally I wanted to spend more time on optimizing painting in the app. It is not very efficient in repainting the games when filtering i.e. and it could also be made a lot prettier using some sort of animation when removing items (in this technique I would probably not have to repaint the actual elements since they would be hidden and re-organized instead).

Designing the UI of the application was inspired by game launchers and Netflix style applications. I wanted a view where I could do it all in a fairly simple, yet engaging way. I also wanted to keep the full list of games always visible and not separate the views; in order to always expose the games available on the platform.
I must admit that I spent a lot more time than I initially thought I would on the actual design of the application. I wanted it to be something I was proud over and could use myself, I think those words from the instruction resonated most with me. It is not that it is complicated work, I had an idea of how to solve all my designs; but the problem was being content with what I produced and re-designing a lot of the parts several times. I think I would maybe plan a little bit more ahead next time to iron out more of the UX/UI concepts.






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
