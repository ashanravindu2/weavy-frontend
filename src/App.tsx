import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {toast, ToastContainer} from "react-toastify";

function App() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [selectedUser, setSelectedUser] = useState(null);
    const [updatedName, setUpdatedName] = useState('');



    const handleCreate = async () => {
        try {
            await createUser(newUser);
            toast.success("User Created!");
            setNewUser({ name: '', email: '' });
            fetchUsers();
        } catch (error) {
            toast.error("Failed to create user");
        }
    };

    const handleSelectUser = async (id) => {
        try {
            const res = await getUser(id);
            setSelectedUser(res.data);
            setUpdatedName(res.data.name);
        } catch (error) {
            toast.error("Error fetching user details");
        }
    };

    const handleUpdate = async () => {
        if (!selectedUser) return;
        try {
            await updateUser(selectedUser.id, { name: updatedName });
            toast.success("User Updated!");
            setSelectedUser(null);
            fetchUsers();
        } catch (error) {
            toast.error("Failed to update user");
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            toast.success("User Deleted!");
            fetchUsers();
        } catch (error) {
            toast.error("Error deleting user");
        }
    };

    const handleSelectUser = async (id) => {
        try {
            const res = await getUser(id);
            setSelectedUser(res.data);
            setUpdatedName(res.data.name);
        } catch (error) {
            toast.error("Error fetching user details");
        }
    };

  return (
      <div className="container">
          <h2>Weavy User Management</h2>

          {/* Create User Form */}
          <input
              type="text"
              placeholder="Enter name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
          />
          <input
              type="email"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
          />
          <button onClick={handleCreate}>Create User</button>

          <ul>
              {users.map((u) => (
                  <li key={u.id}>
                      {u.name} ({u.email})
                      <button onClick={() => handleSelectUser(u.id)}>Edit</button>
                      <button onClick={() => handleDelete(u.id)}>Delete</button>
                  </li>
              ))}
          </ul>

          {selectedUser && (
              <div>
                  <h3>Edit User</h3>
                  <input
                      type="text"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Update User</button>
              </div>
          )}

          <ToastContainer/>
      </div>
  );
}

export default App
