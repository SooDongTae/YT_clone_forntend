import React, { useState } from 'react'
import styles from "../styles/CommentPart.module.css"
import { MdSort } from "react-icons/md"
import Comment from './Comment';



const CommentPart = () => {
    const [firstFocus, setFirstFocus] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [inputComment, setInputComment] = useState("");

    const Me = {
        imgSrc: "https://yt3.ggpht.com/ytc/AMLnZu9Jzp859A5IesAX3WqVFY0ocYhG3_oFkYuLlNlH1KPJhA=s88-c-k-c0x00ffffff-no-rj-mo",
        userName: "이태현",
        comment: "",
        good: 0,
        date: "2022/09/21"
    }

    const [commentsSample, setCommentsSample] = useState([
        {
            imgSrc: "https://yt3.ggpht.com/ytc/AMLnZu_D4JwoqK3mF9YcK1b6_sQ8lvdQ-luwDuqt3w=s88-c-k-c0x00ffffff-no-rj",
            userName: "TaeHi",
            comment: "좋아요!!",
            good: 5,
            date: "2022/05/05",
        },
        {
            imgSrc: "https://lh3.googleusercontent.com/ogw/AOh-ky1uAXwkV8yiFs8KaB07AxluQj2nYO0d-RgdXzqr=s64-c-mo",
            userName: "DoHi",
            comment: "정말 좋아요!!",
            good: 10,
            date: "2022/05/10"
        },
        {
            imgSrc: "https://yt3.ggpht.com/ytc/AMLnZu9kCKCBTyW3NUg0qiakoo_NPijLpMRjHyWyeUhO1-FAXAjbtINI76YzJSfQZ5JZCGnqUxU=s88-c-k-c0x00ffffff-no-rj",
            userName: "구크르",
            comment: "정말 재밌어요!!",
            good: 2,
            date: "2022/05/25"
        },
    ])
  return (
    <div>
        <div className={styles.Comment_box}>
            <div className={styles.Comment_sort_box}>
                <span className={styles.Comment_number}>댓글 {commentsSample.length}개</span>
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
                                            setCommentsSample([Me, ...commentsSample])
                                            setInputComment("")
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
                    commentsSample.map((comment, idx) => {
                        return <Comment comment={comment} key={idx} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CommentPart