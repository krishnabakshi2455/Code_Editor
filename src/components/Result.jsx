import React from 'react'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../ContextF/ContextData'
    function Result() {
        
        const {html, css,js}=useContext(DataContext)
        const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>           
        </html>
    `
        return (
            <>
                <Box>
                    <iframe 
                        srcDoc={srcCode}
                        title='Output'
                        sandbox='allow-scripts'
                        width="100%"
                        height="100%"

                    />



                </Box>



            </>
        )
    }

export default Result