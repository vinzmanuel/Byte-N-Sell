/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import '@sendbird/uikit-react/dist/index.css';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import { useUser } from '@clerk/clerk-react';
function Inbox() {

    const {user}=useUser();
    const [userId,setUserId]=useState();
    const [channelUrl,setChannelUrl]=useState();
    const SendBirdApplicationId=import.meta.env.VITE_SENDBIRD_APP_ID;

    useEffect(()=>{
        if(user){
            // eslint-disable-next-line no-unsafe-optional-chaining
            const id=(user?.primaryEmailAddress?.emailAddress).split('@')[0];
            setUserId(id);
            
        }
    },[])
    console.log(userId);

    return (
        <div style={{ width:'100%', height:'750px' }}>
            <SendBirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID}
            userId={userId}
            
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true}
            >
                <div className='grid frid-cols-1 gap-5 md:grid-cols-3 h-full'>
                    {/*CHannel List */}
                    <div className='p-5 border shadow-lg'>
                        <GroupChannelList 
                            onChannelSelect={(channel)=>{
                                setChannelUrl(channel?.url)
                        }}
                        channelListQueryParams={
                            {
                                includeEmpty:true
                            }
                        }
                        />
                    </div>
                    {/*Channel Message Area */}
                    <div className="md:col-span-2 border shadow-lg">
                        <GroupChannel channelUrl={channelUrl} />
                    </div>
                </div>
            </SendBirdProvider>
        </div>
    )
}

export default Inbox