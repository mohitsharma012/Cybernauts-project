import React, { useState } from "react";
import { createUser } from "../api";

const UserForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState<number>(18);
    const [hobbies, setHobbies] = useState<string[]>([]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await createUser({ username, age, hobbies });
            alert("User created successfully!");
        } catch (error) {
            alert("Error creating user");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Hobbies:</label>
                <input
                    type="text"
                    value={hobbies.join(", ")}
                    onChange={(e) => setHobbies(e.target.value.split(", "))}
                    placeholder="Comma separated hobbies"
                    required
                />
            </div>
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
