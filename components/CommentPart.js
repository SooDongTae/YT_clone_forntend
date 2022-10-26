import React, { useState } from 'react'
import styles from "../styles/CommentPart.module.css"
import { MdSort } from "react-icons/md"
import Comment from './Comment';
import axios from 'axios';



const CommentPart = ( {comments, id} ) => {
    const [firstFocus, setFirstFocus] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [inputComment, setInputComment] = useState("");
    console.log(comments, id);
    const Me = {
        imgSrc: "https://yt3.ggpht.com/ytc/AMLnZu9Jzp859A5IesAX3WqVFY0ocYhG3_oFkYuLlNlH1KPJhA=s88-c-k-c0x00ffffff-no-rj-mo",
        userName: "이태현",
        comment: "",
        good: 0,
        date: "2022/09/21"
    }
    async function insert(comment){
        const form = {video_id: id, token: localStorage.getItem("token"), text: comment};
        await axios.post("http://10.150.151.12:8000/addcomment", form);
    }
  return (
    <div>
        <div className={styles.Comment_box}>        
            <div className={styles.Comment_sort_box}>
                <span className={styles.Comment_number}>댓글 {comments.length}개</span>
                <div>
                    <MdSort size={30}/>
                    <span className={styles.Comment_sort}>정렬 기준</span>
                </div>
            </div>
            <div className={styles.Comment_input_part}>
                <img src='https://yt3.ggpht.com/ytc/AMLnZu9Jzp859A5IesAX3WqVFY0ocYhG3_oFkYuLlNlH1KPJhA=s88-c-k-c0x00ffffff-no-rj-mo'/>
                <div className={styles.Comment_input_box}>
                    {
                        isFocus === false ? 
                        <div className={styles.Comment_line}></div>
                        : <div className={styles.Comment_line_inAni}></div>
                    }
                    <input 
                        onFocus={() => {
                            setIsFocus(true) 
                            setFirstFocus(true)
                        }}
                        onChange={(e) => {
                            if(e.target.value)setIsInput(true)
                            else setIsInput(false)
                            setInputComment(e.target.value)
                        }}
                        onBlur={() => setIsFocus(false)} 
                        placeholder='댓글 추가...'
                        value={inputComment}
                    />
                    <div>
                        {
                            firstFocus ?
                            <>
                                <div 
                                    onClick={() => {
                                        setFirstFocus(false)
                                        setInputComment("")
                                    }}
                                    id={styles.Comment_btn1} 
                                    className={styles.Comment_buttons}
                                >
                                    취소
                                </div>
                                { 
                                    !isInput ? 
                                    <div id={styles.Comment_btn2} className={styles.Comment_buttons}>댓글</div>
                                    : <div 
                                        id={styles.Comment_btn2_active} 
                                        className={styles.Comment_buttons}
                                        onClick={() => {
                                            Me.comment = inputComment
                                            insert(inputComment)
                                            setInputComment("")
                                            setIsInput(false)
                                            
                                        }}
                                    >
                                        댓글
                                    </div>
                                }
                            </> : 
                            <div className={styles.Comment_buttons}></div>
                        }
                    </div>
                 </div>
            </div>
            <div className='Comments_list'>
                {
                    comments.map((comment, idx) => {
                        return <Comment comment={comment} key={idx} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CommentPart