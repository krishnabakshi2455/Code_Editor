import React, { useContext } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DataContext } from '../ContextF/ContextData'
const ContainerCode = styled(Box)`
display:flex;
background-color:#060606;
height:50vh;
`

function Code() {
    const { html, sethtml, css, setcss, js, setjs } = useContext(DataContext)
    return (
        <>
            <ContainerCode>

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

            </ContainerCode>
        </>
    )
}
import { formGroupClasses } from '@mui/material'

export default Code