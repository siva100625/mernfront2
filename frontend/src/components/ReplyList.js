import axios from "axios";
import { useEffect, useState } from "react";
const ReplyList = ({ postId }) => {
    const [replies, setReplies] = useState([]);
  
    useEffect(() => {
      // Fetch replies for the specific post
      axios.get(`http://localhost:5000/api/posts/${postId}/replies`)
        .then((res) => setReplies(res.data))
        .catch((err) => console.error("Error fetching replies:", err));
    }, [postId]);
  
    return (
      <div>
        {replies.length > 0 ? (
          replies.map((reply) => (
            <div key={reply._id} style={styles.reply}>
              <div>
                {/* Ensure userId and username are available before rendering */}
                {reply.userId && reply.userId.username ? (
                  <span>{reply.userId.username}</span>
                ) : (
                  <span>Anonymous</span>
                )}
              </div>
              <p>{reply.content}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    );
  };
  
  const styles = {
    reply: {
      border: "1px solid #ddd",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
    },
  };
  
  export default ReplyList;
  