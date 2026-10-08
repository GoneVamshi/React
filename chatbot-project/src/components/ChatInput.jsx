import {useState} from 'react'

import {Chatbot} from 'supersimpledev'

import './ChatInput.css';


export function ChatInput({chatMessages,setChatMessages}){

    const [inputText,setInputText] = useState('')
    function saveInputText(event){
      setInputText(event.target.value)
    }

    //state does not update the data immediately 
    //state is updated after all of the code is finished

    function sendMessage(){
      const newChatMessages = [...chatMessages,
        {
          message:inputText,
          sender:'user',
          id:crypto.randomUUID()
          
        }
      ]
      setChatMessages(newChatMessages)


      const response = Chatbot.getResponse(inputText)

      setChatMessages([...newChatMessages,
        {
          message:response,
          sender:'robot',
          id:crypto.randomUUID()
          
        }
      ])
      
      setInputText('')
    }
    //controlled input
    return (
      <div className="chat-input-container">
        <input 
          type="text" 
          placeholder="Send a message to Chatbot" 
          size ="30"
          onChange={saveInputText} //onChange runs a function when we change the text inside an input
          value={inputText} //value change the test inside this input
          className="chat-input"
        />
        <button className = "send-button" onClick={sendMessage}>Send</button>
      </div>
      
    )
  }