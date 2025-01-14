import React, { useState } from "react";

const Sidebar: React.FC = () => {
    const [hobbies, setHobbies] = useState<string[]>(["Reading", "Sports", "Music", "Gaming"]);

    return (
        <div style={{ padding: 20, background: "#f0f0f0", width: 250, height: "100vh" }}>
            <h3>Available Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} style={{ cursor: "pointer" }} draggable>
                        {hobby}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
