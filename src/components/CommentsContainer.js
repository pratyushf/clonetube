import React from "react";
import user from "../img/user.png";

const commentsData = [
    {
        name: "John Doe",
        text: "Great post!",
        replies: [
            { name: "Jane Smith", text: "Thank you!" },
            { name: "Mike Johnson", text: "Awesome!" },
            { name: "Emily Davis", text: "I learned a lot." },
            { name: "Sarah Thompson", text: "Well written!" },
            { name: "David Wilson", text: "Impressive!" }
        ]
    },
    {
        name: "Alice Green",
        text: "Interesting topic!",
        replies: [
            { name: "Robert Brown", text: "Indeed!" },
            { name: "Linda Anderson", text: "I agree!" },
            { name: "Michael Davis", text: "Well explained." },
            { name: "Sophia Martinez", text: "Great insights!" },
            { name: "Daniel Wilson", text: "Keep it up!" }
        ]
    },
    {
        name: "Emily Johnson",
        text: "I have a question.",
        replies: [
            { name: "Alex Turner", text: "What's your question?" },
            { name: "Olivia Smith", text: "Ask away!" },
            { name: "William Davis", text: "I might be able to help." },
            { name: "Ava Thompson", text: "Looking forward to your question." },
            { name: "James Wilson", text: "Curious to know!" }
        ]
    },
    {
        name: "Daniel Brown",
        text: "Well done!",
        replies: [
            { name: "Sophia Davis", text: "Thank you!" },
            { name: "Emma Johnson", text: "You nailed it!" },
            { name: "David Wilson", text: "Impressive work." },
            { name: "Oliver Thompson", text: "Bravo!" },
            { name: "Isabella Smith", text: "Keep up the good work!" }
        ]
    },
    {
        name: "Sarah Taylor",
        text: "I completely agree.",
        replies: [
            { name: "James Davis", text: "Glad to hear that!" },
            { name: "Emily Wilson", text: "Agreed!" },
            { name: "Daniel Anderson", text: "Couldn't agree more." },
            { name: "Lily Johnson", text: "Absolutely!" },
            { name: "Jacob Brown", text: "I share the same opinion." }
        ]
    },
    // Add 15 more comment entries with replies here...
    {
        name: "Robert Smith",
        text: "Well explained!",
        replies: [
            { name: "Olivia Johnson", text: "Thank you for clarifying!" },
            { name: "Emma Davis", text: "You made it clear!" },
            { name: "Daniel Thompson", text: "Helped me understand better." },
            { name: "Sophia Wilson", text: "Clear and concise!" },
            { name: "Michael Anderson", text: "Great explanation!" }
        ]
    },
    {
        name: "Lily Davis",
        text: "Awesome work!",
        replies: [
            { name: "James Wilson", text: "Thank you!" },
            { name: "Sarah Thompson", text: "Impressive!" },
            { name: "John Smith", text: "Well done!" },
            { name: "Emily Johnson", text: "Keep it up!" },
            { name: "Daniel Brown", text: "You're amazing!" }
        ]
    },
    {
        name: "Oliver Martinez",
        text: "I have a question.",
        replies: [
            { name: "Sophia Davis", text: "Feel free to ask!" },
            { name: "David Wilson", text: "What's on your mind?" },
            { name: "Emma Thompson", text: "Looking forward to your question." },
            { name: "James Anderson", text: "Curious to know!" },
            { name: "Isabella Johnson", text: "Ask away!" }
        ]
    },
    {
        name: "Emily Turner",
        text: "Keep up the good work!",
        replies: [
            { name: "Daniel Thompson", text: "Thank you for the encouragement!" },
            { name: "Sophia Wilson", text: "I appreciate it!" },
            { name: "Olivia Davis", text: "Motivating!" },
            { name: "James Smith", text: "You inspire me!" },
            { name: "Lily Brown", text: "Great job!" }
        ]
    },
    {
        name: "Michael Johnson",
        text: "Well written!",
        replies: [
            { name: "Sarah Davis", text: "Agreed!" },
            { name: "Daniel Wilson", text: "Nicely articulated!" },
            { name: "Emily Thompson", text: "Impressive!" },
            { name: "James Anderson", text: "Clear and concise!" },
            { name: "Emma Smith", text: "Great work!" }
        ]
    },
    {
        name: "Sophia Anderson",
        text: "I learned a lot.",
        replies: [
            { name: "Jacob Thompson", text: "That's great to hear!" },
            { name: "Isabella Davis", text: "Knowledgeable!" },
            { name: "Daniel Wilson", text: "Well explained!" },
            { name: "Emily Smith", text: "Informative!" },
            { name: "James Brown", text: "Thank you for sharing!" }
        ]
    },
    {
        name: "Olivia Davis",
        text: "Impressive!",
        replies: [
            { name: "Sophia Thompson", text: "Indeed!" },
            { name: "Daniel Anderson", text: "Great job!" },
            { name: "Emily Wilson", text: "Well done!" },
            { name: "James Smith", text: "You nailed it!" },
            { name: "Lily Johnson", text: "Fantastic work!" }
        ]
    },
    {
        name: "James Brown",
        text: "Thank you for sharing!",
        replies: [
            { name: "Daniel Davis", text: "You're welcome!" },
            { name: "Sophia Smith", text: "Appreciate it!" },
            { name: "Emily Thompson", text: "Thanks!" },
            { name: "Oliver Wilson", text: "Grateful!" },
            { name: "Isabella Johnson", text: "Keep it up!" }
        ]
    },
    {
        name: "Emma Thompson",
        text: "You inspire me!",
        replies: [
            { name: "James Wilson", text: "I'm glad I could inspire you!" },
            { name: "Sophia Davis", text: "Likewise!" },
            { name: "Oliver Smith", text: "Motivating!" },
            { name: "Isabella Brown", text: "You're amazing!" },
            { name: "Emily Johnson", text: "Inspiration at its best!" }
        ]
    },
    {
        name: "Daniel Anderson",
        text: "Fantastic work!",
        replies: [
            { name: "Olivia Davis", text: "Thank you!" },
            { name: "James Thompson", text: "Impressive!" },
            { name: "Emily Wilson", text: "Well done!" },
            { name: "Sophia Smith", text: "You're awesome!" },
            { name: "Lily Johnson", text: "Keep it up!" }
        ]
    }
    // Add 10 more comment entries with replies here...
];



const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className=" flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-8 h-8 p-1" src={user} alt="user" />
      <div>
        <p className=" font-bold ml-1 text-gray-700">{name}</p>
        <p className=" ml-8">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
    if (!comments || comments.length === 0) {
      return null; // Return null if comments array is undefined or empty
    }
  
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment}></Comment>
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies}></CommentsList>
        </div>
      </div>
    ));
  };
  

export default function CommentsContainer() {
  return (
    <div className="p-3">
      <h1 className=" text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
}
