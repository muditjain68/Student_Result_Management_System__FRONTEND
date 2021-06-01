import React from 'react'
import './Table.css';

const Table = ({semInfo}) => {
    console.log(semInfo);
    return (
        <div  className="table">
            <tr>
                <td><h5>Subject</h5></td>
                <td><h5>Marks</h5></td>
            </tr>

            {semInfo.map((subject,id)=>(
                <tr key={id}>
                    <td>{subject.subjectName}</td>
                    <td>{subject.marks}</td>
                </tr>
            ))}
        </div>
    )
}

export default Table
