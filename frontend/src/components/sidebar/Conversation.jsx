import useConveration from "../../zustand/useConversation";

const Conversation = ({conversation, lastIdx, emoji}) => {

  const {selectedConversation, setSelectedConversation} = useConveration();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? 'bg-sky-500' : ''}
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className="avatar online">
          <div className="w-12 rounded-full">
          <img
            alt="user avatar"
            src={conversation.profilePic}
          />
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;

// STARTER CODE
// const Conversation = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//             <div className="w-12 rounded-full">
//               <img
//                 src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F10%2Fgratisography-cool-cat-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=JTZXQS5iqyP2NM&vet=12ahUKEwiE67-hyL-JAxUi-DgGHXv7CloQM3oECBgQAA..i&w=800&h=525&hcb=2&ved=2ahUKEwiE67-hyL-JAxUi-DgGHXv7CloQM3oECBgQAA"
//                 alt="user avatar"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col flex-1">
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-gray-200">Jon Snow</p>
//                   <span className="text-xl">emoji</span>
//               </div>
//           </div>
//         </div>
//         <div className="divider my-0 py-0 h-1"></div>
//       </>
//     );
//   };
  
//   export default Conversation;
  