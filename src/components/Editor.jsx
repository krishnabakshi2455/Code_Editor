import React from 'react'
import { useState } from 'react';
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../index.css'
import './AllCss.css'
// --------------------------

const EditorContainer = styled(Box)`
flex-grow:1;
flex-basic:0;
flex-diretion:column;
padding:0 8px 8px;
`


function Editor({ heading, icons, color, value, onchange }) {
    const [open, setopen] = useState(true)

    const handlchange = (editor, data, value) => {
        onchange(value)
    }
    return (
        <>
            <EditorContainer style={open ? null : { flexGrow: 0 }}>
                <Box className='editor-header'>
                    <Box className='editor-heading'> 
                        {/* ----- */}
                        <Box
                            component='span'
                            style={{
                                backgroundColor: color,
                                height: "20px",
                                width: "20px",
                                display: "flex",
                                placeContent: "center",
                                borderRadius: "5px",
                                marginRight: "5px",
                                paddingBottom: "2px",
                                color: "#000"
                            }}
                        >
                            {
                                icons
                            }
                        </Box>
                        {/* ---- */}
                        {
                            heading
                        }
                    </Box>
                    <CloseFullscreenIcon
                        fontSize='small'
                        style={{ alignSelf: 'center', cursor: 'pointer' }}
                        onClick={() => { setopen(prevstate => !prevstate) }}
                    />
                </Box>

                {/* ----------------- */}
                <ControlledEditor
                    className='controlled-editor'
                    value={value}
                    onBeforeChange={handlchange}
                    options={{
                        theme: 'material',
                        lineNumbers: true
                    }}
                />






            </EditorContainer>




        </>
    )
}

export default Editor