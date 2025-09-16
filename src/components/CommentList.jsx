import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const CommentList = () => {

    const { data: comments, isLoading } = useFetch();
    const [searchId, setSearchId] = useState("");

    if (isLoading) {
        return <div>Loading...</div>
    }

    // const filteredComments = searchId
    //     ? comments.filter(comment => String(comment.id).includes((searchId)))
    //     : comments;

    const filteredComments = searchId
        ? comments.filter(comment => comment.id === Number((searchId)))
        : comments;

    return (
        <div className="comment-list" style={{ width: '100%' }}>
            <h2>Comment List</h2>
            <input style={{ width: '100%', height: '45px', marginBottom: '30px' }} type="text" placeholder="Search comments..." onChange={(e) => setSearchId(e.target.value)} />
            {isLoading && <p>Loading comments...</p>}
            {filteredComments?.length > 0 && (
                <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredComments.map(comment => (
                            <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
export default CommentList