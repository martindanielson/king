## Captain's log, startdate 73374.2

I used the [Create React App](https://github.com/facebook/create-react-app) as a base for the assignment. Since _Fredrik_ mentioned _Styled Components_ I wanted to make use of it in the assignment; both coding and learning at the same time. This choice did add some extra overhead in terms of time, but has given me a solid understanding of the concept and its capabilities.

Another thing I wanted to do was to keep it fairly light and not use Redux; using React's good old Context instead. Interesting way to solve it and looking at hooks in general it feels like it might be a light-weight version of Redux part of the core React package. Of course, there are yet things to see in a real-world application where the code-base is a lit bigger; but pretty nifty to see something a lot less "chatty".

Given the above endeavours I needed to cut out a few things in order to spend reasonable time on this. I did not use Type Script and I would have loved to spend some more time on the tests (a little contrived). Hopefully you can trust that I will add this at a later stage; given the opportunity. I also wanted to write a lean Node.js app to serialize the state but since the focus is on front-end I hope this wont be held against me. Finally I wanted to spend more time on optimizing painting in the app. It is not very efficient in repainting the games when filtering i.e. and it could also be made a lot prettier using some sort of animation when removing items (in this technique I would probably not have to repaint the actual elements since they would be hidden and re-organized instead).

Designing the UI of the application was inspired by game launchers and Netflix style applications. I wanted a view where I could do it all in a fairly simple, yet engaging way. I also wanted to keep the full list of games always visible and not separate the views; in order to always expose the games available on the platform.
I must admit that I spent a lot more time than I initially thought I would on the actual design of the application. I wanted it to be something I was proud over and could use myself, I think those words from the instruction resonated most with me. It is not that it is complicated work, I had an idea of how to solve all my designs; but the problem was being content with what I produced and re-designing a lot of the parts several times. I think I would maybe plan a little bit more ahead next time to iron out more of the UX/UI concepts.

## Available Scripts

In the `kings-amongst-kings` directory, you can run:

### `npm install`

This will install all the dependencies for this project as well as the ones for the `../service`

### `npm start`

Runs both the service and React app in one go. Open [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner.
