### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React us a JS library, is use to build quick user interfaces.

- What is Babel?
    is a JS compiler that helps you use modern JS features in older environments that do not suppport them.

- What is JSX?
    is a syntax extension for JS that look similar to HTML. It is used in React to describe what the UI should look like.

- How is a Component created in React?
    is a reusable, self-contained piece of the user interface.

- What are some difference between state and props?
    state and props are both ways to manage data in components, but
    they have different purposes and behaviors.

- What does "downward data flow" refer to in React?
    means that data in a React app flows in one direction, from
    parent components to child components.

- What is a controlled component?
    is a form element(like an input, textarea, or select) where
    React controls its value through state.

- What is an uncontrolled component?
    is a form element (like an input, textarea, or select) where the form data is handled by the DOM itself, rather than being controlled by React's state.

- What is the purpose of the `key` prop when rendering a list of components?
    is used to uniquely idenify each element in a list of components. Its purpose is to help React efficiently update and re-render the list by knowing which items have changed, been added, or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    When rendering a list of components in React can be a poor choice because it can lead to performance issues and unexpected behavior
    in certain situations.

- Describe useEffect.  What use cases is it used for in React components?
    is a hook that allows you to perform side effects in function components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    is a hook in React that provides a way to persist mutable values across renders without causing a re-render when the values changes.

- When would you use a ref? When wouldn't you use one?
 do not use it: Managing component state, triggering re-renders, and passing 
data between components.
use it: accessing DOM elements, storing values wihtout re-rendering, managing focus or scroll.

- What is a custom hook in React? When would you want to write one?
    is a JS function that allows you to reuse stateful logic across different components.

    Example:

    // Custom Hook: useLocalStorage.js
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage item", error);
    }
  };

  return [storedValue, setValue];
}
