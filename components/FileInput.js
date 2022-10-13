import React, { useState, useContext } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import styles from "../styles/FileInput.module.css"
import { UploadStatus } from './Header';

const FileInput = () => {
    const [isTypeErr, setIsTypeErr] = useState(false);
    const [onFileUploaded, setOnFileUploaded] = useState(false);
    const [next, setNext] = useState(false);
    const status = useContext(UploadStatus)
    console.log(status.fileTypes)

    const handleChange = (file) => {
        status.file = file
        console.log(status.file)
        setOnFileUploaded(true)
    }
    return (
        <>
            <div className={styles.Popup_top_box}>
                <span>동영상 업로드</span>
                { next ? <div className={styles.next_button_active}>다음</div> : <div className={styles.next_button}>다음</div>}
            </div>
            <div className={styles.Popup_middle_box}>
                <FileUploader
                    handleChange={handleChange} 
                    types={status.fileTypes}
                    children
                    name='input_file'
                    onTypeError={() => {
                        setIsTypeErr(true)
                        setOnFileUploaded(false)
                        setNext(false)
                    }}
                    onDrop={() => {
                        setIsTypeErr(false)
                        setOnFileUploaded(true)
                        setNext(true)
                        // setFile(e.target.value)
                        // console.log(file)
                    }}
                    onSelect={() => {
                        setIsTypeErr(false)
                        setOnFileUploaded(true)
                        setNext(true)
                        // setFile(e.target.value)
                        // console.log(file)
                    }}
                >
                    {
                        isTypeErr ? <div style={{color: "red"}}>파일형식을 확인해주세요</div> 
                        : onFileUploaded ? <div style={{color: "blue"}}>파일업로드 성공</div> 
                        : <div>Drop here...</div>
                    }
                </FileUploader>
                <p>동영상 파일을 드래그 앤 드롭하여 업로드(JPG, PNG, GIF)</p>
                <span>동영상을 게시하기 전에는 비공개로 설정됩니다.</span>
                <label 
                    className={styles.File_submit_label} 
                    htmlFor='input_file'
                >파일 선택</label>
                <input 
                    id='input_file' 
                    accept='image/*'
                    style={{display: "none"}}   
                    type="file"
                    onChange={(e) => {
                        status.file = e.target.files[0]
                        setOnFileUploaded(true)
                        console.log(status.file)
                    }}
                />
            </div>
            <div className={styles.Popup_bottom_box}>
                <p>YouTube에 동영상을 제출하면 YouTube 서비스 약관 및 커뮤니티 가이드에 동의하게 됩니다.</p>
                <p>불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수 있습니다. 타인의 저작권 또는 개인정보 보호 권한을 침해해서는 안 됩니다.</p>
            </div>
        </>
    )
}

export default FileInput