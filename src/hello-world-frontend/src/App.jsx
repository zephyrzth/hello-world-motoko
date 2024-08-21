import { useState } from 'react';
import { hello_world_backend } from 'declarations/hello-world-backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [add, setAdd] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello_world_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function handleAdd(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const val = event.target.elements.add.value;
    hello_world_backend.add(val).then((resp) => {
      setAdd(resp);
    });
    return false;
  }

  return (
    <main>
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
      <form action="#" onSubmit={handleAdd}>
        <label htmlFor="add">Enter some string: &nbsp;</label>
        <input id="add" alt="Add" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="add">{add}</section>

    </main>
  );
}

export default App;
