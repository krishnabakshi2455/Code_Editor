import React, { useContext } from 'react'
import Editor from './Editor'
import './AllCss.css'
import { Box, styled } from '@mui/material'
import { DataContext } from '../ContextF/ContextData'


function Code() {
    const { html, sethtml, css, setcss, js, setjs } = useContext(DataContext)
    return (
        <>
            <Box className='editor-contianer'>

                <Editor
                    heading="HTML"
                    icons="/"
                    color="#FF3C41"
                    value={html}
                    onchange={sethtml}
                />
                <Editor
                    heading="CSS"
                    icons="*"
                    color="#0EBEFF"
                    value={css}
                    onchange={setcss}
                />
                <Editor
                    heading="JavaScript"
                    icons="{}"
                    color="#FCD000"
                    value={js}
                    onchange={setjs}
                />

            </Box>
        </>
    )
}
import { formGroupClasses } from '@mui/material'

export default Code