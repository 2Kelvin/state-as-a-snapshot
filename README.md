# state-as-a-snapshot

From this read, I learn that:

- Unlike regular variables, a state variable behaves like a `snapshot`: Updating it (through the setter function) `triggers a rerender` instead of changing the value it carries
- the state needs to be updated inorder for the UI interface to react to an event
- rendering just means React is calling you function component to return its JSX
- the JSX you return is a `snapshot of the UI in time`: its props, local variables, event handlers. Basically this is the current UI displayed until state changes forcing the component to rerender with the new data
- a component rerender involves, react calling your function again, the function returning new upadted JSX & react updating the screen with the new rendered component
- the reason state unlike normal variables does not disappear during a render is because it `state actually lives in React itself`. `State lives outside your functional component`
- that on telling react to change the state, react then passes a snapshot of the new value of the state variable into the component which will cause it to render new JSX as per its logic
- that basically, a UI snapshot is a snapshot of a component's JSX (its nodes/elements, variables & most importantly its logic like event handlers, functions etc)
- that this UI snapshot can change the next minute if the user e.g. clicks something and changes the state. This forces the current snapshot to be scrapped off completely and a new snapshot created and updated on the screen. The new snapshot carries with it the physical elements & the logic
- once the user changes the state thro Ui interaction, the component clicked/ changed tells react to change its state variable value to the new one. Then React returns the snapshot of the new state to the component forcing it to create a new UI snapshot that will be displayed on the screen until the user changes it again by changing the state.
