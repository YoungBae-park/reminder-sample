import React from 'react';

const Template = ({children}) => {
    return (
        <div className="Template">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default Template;