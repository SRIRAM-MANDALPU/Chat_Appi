import React from 'react'
import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import  ChannelContainer  from './components/ChannelContainer';
import ChanelListContainer from './components/ChanelListContainer';
import './App.css';

const apiKey = 'baq43jmjsdy7';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChanelListContainer 

            />
            <ChannelContainer
            
            />
            
        </Chat>
    </div>
  )
}

export default App;