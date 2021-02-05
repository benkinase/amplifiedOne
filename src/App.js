import Navbar from "./components/Navbar";

import React, { useState, useEffect } from "react";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listItems } from "./graphql/queries";
import {
  createItem as createItemMutation,
  deleteItem as deleteItemMutation,
} from "./graphql/mutations";

const initialFormState = { name: "", description: "" };

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const apiData = await API.graphql({ query: listItems });
    setItems(apiData.data.listItems.items);
  }

  async function createItem() {
    if (!formData.name || !formData.description) return;
    console.log(formData);
    await API.graphql({
      query: createItemMutation,
      variables: { input: formData },
    });
    setItems([...items, formData]);
    setFormData(initialFormState);
  }

  async function deleteItem({ id }) {
    const newItemsArray = items.filter((note) => note.id !== id);
    setItems(newItemsArray);
    await API.graphql({
      query: deleteItemMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className='App'>
      <h1>My Item App</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder='Item name'
        value={formData.name}
        style={{ color: "black" }}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder='Item description'
        value={formData.description}
        style={{ color: "black" }}
      />
      <button onClick={createItem}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {items.map((item) => (
          <div key={item.id || item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => deleteItem(item)}>Delete item</button>
          </div>
        ))}
      </div>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default App;
//export default withAuthenticator(App);
