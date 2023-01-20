import React, { useRef, useState } from 'react'
import { Image, Box, Input, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

// TODO 記得之後跟後端串接使用 loading ui
function Login() {
  const [imageUrl, setImageUrl] = useState('');
  const uploadInput = useRef();

  function handleUploadImage() {
    if (imageUrl) return;
    uploadInput.current.click();
  }

  function handlePreviewImage(e) {
    console.log(e.target.files);
    const [file] = e.target.files;
    const srcUrl = window.URL.createObjectURL(file);
    setImageUrl(srcUrl);
  }

  function removeImageHandler() {
    setImageUrl('');
  }
  return (
    <div>
      <Input
        ref={uploadInput}
        display="none"
        type="file"
        accept='image/*'
        onChange={handlePreviewImage}
      />
      <Box 
        w="300px"
        h="150px"
        position="relative"
        outline={imageUrl === '' ? '3px dashed #2C9EF3' : 'none'}
        borderRadius="8px"
        cursor="pointer"
        bgColor={imageUrl === '' ? '#A7D2EE' : 'transparent'}
        color="#6D7072"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow='hidden'
        transition=".25s"
        _hover={{
          boxShadow: imageUrl === '' ? '0 0 9px 15px rgba(230,125,125,0.75) inset' : 'none',
          outlineColor: 'red'
        }}
        onClick={handleUploadImage}
      >
        <Text m='0' display={imageUrl === '' ? 'block' : 'none'}>點擊/拖曳至此上傳檔案</Text>
        <Image 
          src={imageUrl} 
          alt='上傳的預覽圖片'
          display={imageUrl !== '' ? 'block' : 'none'}  
          w='100%'
          maxW='100%'
          h='auto'
          objectFit="cover"
        />
        <Box
          display={imageUrl !== '' ? 'flex' : 'none'}  
          position='absolute'
          right='10px'
          top='10px'
          borderRadius='50%'
          w='24px'
          h='24px'
          justifyContent="center"
          alignItems="center"
          backgroundColor='black'
          _hover={{
            backgroundColor: 'red'
          }}
          onClick={removeImageHandler}
        >
          <CloseIcon  w='10px' h='10px'/>
        </Box>
      </Box>
      {/* <Box w="300px">
        <Image 
          src={imageUrl} 
          alt='上傳的預覽圖片'
          display={imageUrl !== '' ? 'block' : 'none'}  
          w='100%'
          h='auto'
          />
      </Box> */}
    </div>
  )
}

export default Login