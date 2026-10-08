import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessages } from './components/ChatMessages.jsx'
import './App.css'



// function ChatInput({chatMessages,setChatMessages}){

//     const [inputText,setInputText] = useState('')
//     function saveInputText(event){
//       setInputText(event.target.value)
//     }

//     //state does not update the data immediately 
//     //state is updated after all of the code is finished

//     function sendMessage(){
//       const newChatMessages = [...chatMessages,
//         {
//           message:inputText,
//           sender:'user',
//           id:crypto.randomUUID()
          
//         }
//       ]
//       setChatMessages(newChatMessages)


//       const response = Chatbot.getResponse(inputText)

//       setChatMessages([...newChatMessages,
//         {
//           message:response,
//           sender:'robot',
//           id:crypto.randomUUID()
          
//         }
//       ])
      
//       setInputText('')
//     }
//     //controlled input
//     return (
//       <div className="chat-input-container">
//         <input 
//           type="text" 
//           placeholder="Send a message to Chatbot" 
//           size ="30"
//           onChange={saveInputText} //onChange runs a function when we change the text inside an input
//           value={inputText} //value change the test inside this input
//           className="chat-input"
//         />
//         <button className = "send-button" onClick={sendMessage}>Send</button>
//       </div>
      
//     )
//   }
  

  //event handlers = run a function when we interact with the website
  //state = data that is connected to the HTML.when we update this data it will update the html




function App(){

  const [chatMessages,setChatMessages] = useState([{
    message:'hello chatbot',
    sender:'user',
    id:"id1"
  },{
    message:'Hello! How can I help you?',
    sender:'robot',
    id:'id2'
  },{
    message:'can you get me todays date?',
    sender:'user',
    id:"id3"
  },{
    message:'Today is september 30',
    sender:'robot',
    id:'id4'
  }])
  
  return(
    <div className="app-container">
      
      <ChatMessages chatMessages={chatMessages}/>
      <ChatInput chatMessages = {chatMessages} setChatMessages={setChatMessages}/>
    </div>
  )
}   

export default App
