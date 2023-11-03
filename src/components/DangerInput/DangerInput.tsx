import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';
import { Valentine } from 'react-bootstrap-icons';

function DangerInput() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }
    return (
        <div className='m-3 w-50'>
            <h3>Danger Bar</h3>
            {/* Componenete padre */}
            <Form.Range value={value} onChange={handleChange} />
            {/* Componente hijo */}
            <DangerBar value={value} />
        </div>
    )
}
export default DangerInput;