import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,Box,Image,Text} from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import style from "./Style.module.css"
import { useRef } from 'react';

const News = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef(null)
const [news,setNews]=useState([])
  let dateObj = new Date();

  let myDate = (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1)+ "-" + (dateObj.getUTCDate());
  // console.log(myDate)

  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=technology&from=${myDate}&sortBy=popularity&apiKey=ef816628ed504cd9b5a14971665bfb36`)
  .then((res)=>{
    console.log(res.data.articles)
    setNews(res.data.articles)
  })
  },[])
 

  return (
    <>
    <Button mt={3} ref={btnRef} onClick={onOpen} color="black"backgroundColor="white">
        News
      </Button>
     <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Technology News</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box>
      {
        news.map((e)=>(
          <>
          <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="10px"marginBottom="30px" >
          <Box><Text fontSize="2xl" width="100%"fontWeight="bold">{e.title}</Text></Box>
          <Flex gap={"20px"}>
          <Box><Image src={e.urlToImage} height="100%"borderBottomLeftRadius="10px"/></Box>
          <Box>
              <Box><Text fontSize="1xl"fontWeight="bold">{e.author}</Text></Box>
              <Box><Text>{e.description}</Text></Box>
          </Box>
          </Flex>
          </Box>
          </>
        ))
      }
    </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default News