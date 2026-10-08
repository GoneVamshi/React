 import {useRef,useEffect} from 'react'
 import { ChatMessage } from './ChatMessage.jsx'
 import './ChatMessages.css'
 
 
 export function ChatMessages({chatMessages}){

    const chatMessagesRef = useRef(null)//automatically save an html element from the component
    //ref is a container with special react features

    useEffect(()=>{
      const containerElem = chatMessagesRef.current
      if(containerElem){
        containerElem.scrollTop = containerElem.scrollHeight
      }

    },[chatMessages])//react will run this function after the component is created or updated
    //every time the component is updated
    // second parameter is an array it controls when useEffect runs
    //[] only runs once after the component  is created
    //[chatMessage] run this function every time chatMessages chnages and aslo called dependency array controls when useEffect runs

    // const [chatMessages,setChatMessages] = React.useState([{
    //   message:'hello chatbot',
    //   sender:'user',
    //   id:"id1"
    // },{
    //   message:'Hello! How can I help you?',
    //   sender:'robot',
    //   id:'id2'
    // },{
    //   message:'can you get me todays date?',
    //   sender:'user',
    //   id:"id3"
    // },{
    //   message:'Today is september 30',
    //   sender:'robot',
    //   id:'id4'
    // }]) 

    //const [chatMessages,setChatMessages] = array

    //const chatMessages = array[0]//initial value;
    //const setChatMessages = array[1]//updater function 

    //in react we should not update the data directly 
      
    //onClick run some function we click the button
    //onClick is known as event
    // function is called Event Handler

    

    return(
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatmessage)=>{
                return  (
                  <ChatMessage 
                    message={chatmessage.message} 
                    sender={chatmessage.sender} 
                    key={chatmessage.id}
                  />
                )
          })}
      </div>
    )
    

  }