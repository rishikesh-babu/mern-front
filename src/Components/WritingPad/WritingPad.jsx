import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WritingPad({ value, setValue, theme, readOnly }) {

    return (
        <div>
            <ReactQuill
                theme={theme}
                value={value.slice(0, 250)}
                readOnly={readOnly}
                onChange={setValue}
            />
        </div>
    )
}

export default WritingPad
