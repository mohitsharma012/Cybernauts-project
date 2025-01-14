import React, { useEffect, useState } from "react";
import ReactFlow, { Node, Edge, Controls } from "react-flow-renderer";
import { getUsers } from "../api";
import { User } from "../types";

const UserVisualization: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const nodes = users.map((user) => ({
        id: user.id,
        data: { label: `${user.username} - Age: ${user.age}` },
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        style: { background: "#1a192b", color: "#fff", padding: 10 },
    }));

    const edges: Edge[] = users.flatMap((user) =>
        user.hobbies.map((hobby, index) => ({
            id: `${user.id}-hobby-${index}`,
            source: user.id,
            target: `hobby-${hobby}`,
            label: hobby,
        }))
    );

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div style={{ height: 600 }}>
            <ReactFlow elements={[...nodes, ...edges]}>
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default UserVisualization;
