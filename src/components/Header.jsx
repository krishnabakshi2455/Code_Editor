import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
const Container = styled(AppBar)`
background:#060606;
height:9vh;
`

const logo = "https://cdn.freebiesupply.com/logos/large/2x/codepen-logo-png-transparent.png"
function Header() {
    return (
        <>
            <Container position='static'>
                <Toolbar>
                    <img src={logo} alt="" style={{width:"150px"}} />
                </Toolbar>
            </Container>
        </>
    )
}

export default Header
