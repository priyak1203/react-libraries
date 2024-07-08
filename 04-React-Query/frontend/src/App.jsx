import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

function App() {
  const [items, setItems] = useState(defaultItems);

  return (
    <section className="section-center">
      <Form />
      <Items />
    </section>
  );
}

export default App;
