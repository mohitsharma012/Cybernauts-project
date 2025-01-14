import React from "react";
import UserForm from "./components/UserForm";
import Sidebar from "./components/Sidebar";
import UserVisualization from "./components/UserVisualization";

const App: React.FC = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <h1>User Management System</h1>
                <UserForm />
                <UserVisualization />
            </div>
        </div>
    );
};

export default App;
