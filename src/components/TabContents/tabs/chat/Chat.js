import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
import './chat.css'

const chatClient = new StreamChat('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmVkLXN0YXItOSIsImV4cCI6MTY2OTMwMDgyN30._ugZcEXFcj0kdZ4Rf4DvOg0JRk5jCqnfkKrV4xNjtwQ';

chatClient.connectUser(
    {
        id: 'red-star-9',
        name: 'red',
        image: 'https://getstream.io/random_png/?id=red-star-9&name=red',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
    // add as many custom fields as you'd like
    image: 'https://www.drupal.org/files/project-images/react.png',
    name: 'Talk about React',
    members: ['red-star-9'],
});


const TeamChat = () => {
    return (
        <div className='chat_container'>
            <Chat client={chatClient} theme='str-chat__theme-light'>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    )
}

export default TeamChat