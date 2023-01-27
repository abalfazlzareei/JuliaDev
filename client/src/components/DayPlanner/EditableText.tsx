import React, { useState } from 'react';

interface Props {
    initialValue: string;
}

const EditableText: React.FC<Props> = ({initialValue}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className='w-screen flex items-center justify-center' onClick={handleDoubleClick}>

            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyPress}
                    onChange={handleChange}
                />
            ) : (
                <label>{value}</label>
            )}
        </div>
    );
};

export default EditableText;
