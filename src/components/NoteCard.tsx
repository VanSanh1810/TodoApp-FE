import React from 'react';
import './noteCard.css';

// Định nghĩa interface cho các props
interface NoteCardProps {
    title: string;
    name: number;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, name }) => {
    return (
        <div className="card-item">
            <h3>{title}</h3>
            <p>{name}</p>
            <input type="checkbox" />
        </div>
    );
};

export default NoteCard;
