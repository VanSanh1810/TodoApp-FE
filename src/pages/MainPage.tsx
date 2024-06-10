import React, { useEffect, useState } from 'react';
import './mainPage.css';
import NoteCard from '../components/NoteCard';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import axiosInstance from '../configs/axiosInstance';

const MainPage: React.FC = () => {
    const [todo, setTodo] = useState([
        { title: 'a', name: import.meta.env.VITE_BE_URL },
        { title: 'b', name: 2 },
        { title: 'c', name: 3 },
        { title: 'd', name: 4 },
        { title: 'e', name: 2 },
        { title: 'f', name: 3 },
        { title: 'g', name: 4 },
        { title: 'h', name: 2 },
        { title: 'y', name: 3 },
        { title: 'i', name: 4 },
    ]);

    const [reloadAction, setReloadAction] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosInstance.get('/task');
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        };
        fetchTasks();
    }, [reloadAction]);

    const onDragEnd = (result: DropResult) => {
        // Logic xử lý khi kéo thả kết thúc
        const { source, destination } = result;
        if (!destination) return;

        const items = Array.from(todo);
        const [newOrder] = items.splice(source.index, 1);
        items.splice(destination.index, 0, newOrder);

        setTodo(items);
    };

    return (
        <div className="container">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div className="scroll-card" {...provided.droppableProps} ref={provided.innerRef}>
                            {/* <h1>To do App</h1> */}
                            <div className="list-card">
                                {todo.map((item, index) => (
                                    <Draggable key={item.title} draggableId={item.title} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <NoteCard key={index} title={item.title} name={item.name} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default MainPage;
