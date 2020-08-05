import React from 'react';
import { Flex, Box, Button, Heading, Icon } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  return (
    <Flex align='center' justify='center' minH='100vh'>
      <Box
        rounded='lg'
        padding='8'
        textAlign='center'
        width={['90%', '75%', '50%', '35%']}
        bg='themeOne.ebonyclay'
        color='themeOne.foam'>
        <Heading mb='3'>Kranzjam.FM</Heading>
        <a href={`https://spotiql.herokuapp.com/auth/spotify/login?redirect_uri=${window.location.href}`}>
          <Button
            size='lg'
            variant='outline'
            variantColor='themeOne.foam'
            _hover={{ bg: 'themeOne.foam', color: 'themeOne.violet' }}>
            <FontAwesomeIcon style={{ marginRight: '5' }} icon={['fab', 'spotify']} as={Icon} />
            Log In!
          </Button>
        </a>
      </Box>
    </Flex>
  );
};

export default Login;
