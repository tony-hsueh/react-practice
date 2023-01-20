import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Box } from '@chakra-ui/react'

function Navbar() {
  return ( 
    <Stack direction="row" py="1rem" justifyContent="flex-end">
      <Box>
        <Link to="/"> 回首頁</Link>
      </Box>
      <Box>
        <Link to="/login">登入</Link>
      </Box>
      <Box>
        <Link to="/112n222">登入</Link>
      </Box>
    </Stack>
  )
}

export default Navbar