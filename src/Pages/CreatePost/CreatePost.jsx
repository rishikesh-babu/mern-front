import React, { useEffect, useState } from 'react'
import WritingPad from '../../Components/WritingPad/WritingPad'
import { AxiosInstance } from '../../config/axiosConfig'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const [value, setValue] = useState('')
    const [file, setFile] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(value)
    })

    function handleChange(e) {
        setFile(e.target.files[0])
    }

    async function handleCreate() {
        let imagePath = undefined
        if (file) {
            const formDataImage = new FormData()
            formDataImage.append('img', file)
            imagePath = await AxiosInstance({
                url: '/posts/addImage',
                method: 'post',
                data: formDataImage,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(imagePath)
        }

        AxiosInstance({
            url: '/posts/createpost',
            method: 'post',
            data: {
                content: value,
                imagePath: imagePath?.data?.path
            }
        })
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <input type="file" onChange={handleChange} accept='image/*' />   {/* only accept image file */}
            {
                file && <img src={URL.createObjectURL(file)} width={200} height={200} alt="" />
            }
            <WritingPad value={value} setValue={setValue} theme={'snow'} readOnly={false} />
            <button onClick={handleCreate} > Create Post </button>
        </div>
    )
}

export default CreatePost
