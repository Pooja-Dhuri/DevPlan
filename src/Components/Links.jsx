import { Button, Menu, MenuButton, MenuItem, MenuList,Image} from '@chakra-ui/react'
import React from 'react'
import {ChevronDownIcon} from '@chakra-ui/icons'


const Links = () => {

  return (
    <>
   <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}color={"black"} backgroundColor={"white"}>
    Links
  </MenuButton>
  <MenuList color={"black"} backgroundColor={"white"}>
    <MenuItem><a href='https://fontawesome.com/'target="_blank"><Image src="https://tse1.mm.bing.net/th?id=OIP.jbg63RKCpLmoSNS07XYlmwHaHc&pid=Api&P=0" height="40px" width="40px"/></a>-Font Awesome</MenuItem>

    <MenuItem><a href='https://getcssscan.com/css-box-shadow-examples'target="_blank"><Image src="https://toastlog.com/img/logos/cssscan.svg" height="40px" width="40px"/></a>-Box-Shadow</MenuItem>

    <MenuItem><a href='https://app.netlify.com/drop'target="_blank"><Image src="https://tse2.mm.bing.net/th?id=OIP.leF49bHcGiMnWVeERCqGbAHaHa&pid=Api&P=0" height="40px" width="40px"/></a>-Netlify</MenuItem>

    <MenuItem><a href='https://github.com/'target="_blank"><Image src="
https://tse3.mm.bing.net/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&pid=Api&P=0" height="40px" width="40px"/></a>-Git-Hub</MenuItem>

    <MenuItem><a href='https://fonts.google.com/'target="_blank"><Image src="https://tse4.mm.bing.net/th?id=OIP.iFcDwfRM52OB4l1wAk4ZogHaFb&pid=Api&P=0" height="40px" width="40px"/></a>-Google-Font</MenuItem>

    <MenuItem><a href='https://www.ratatype.com/'target="_blank"><Image src="https://tse1.mm.bing.net/th?id=OIP.txQ0NR-FrGJ4J_eumWeRNQAAAA&pid=Api&P=0" height="40px" width="40px"/></a>-Rata Type</MenuItem>

    <MenuItem><a href='https://developer.mozilla.org/en-US/docs/Web/javascript'target="_blank"><Image src="
https://tse4.mm.bing.net/th?id=OIP.f1lwV7c2mwE3NCHovF38rQHaHZ&pid=Api&P=0" height="40px" width="40px"/></a>-MDN</MenuItem>
    
  </MenuList>
</Menu>
  </>
  )
}

export default Links