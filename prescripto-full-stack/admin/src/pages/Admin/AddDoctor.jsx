import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [availability, setAvailability] = useState([])  // Array to store availability times

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData();
            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
            formData.append('availability', JSON.stringify(availability))  // Add availability to form data

            // console log formdata
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
                setAvailability([])  // Reset availability after form submission
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const handleAvailabilityChange = (date) => {
        setAvailability([...availability, date])  // Add selected date and time to availability
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Add Peer Facilitator</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
                    <p>Upload Picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Full Name</p>
                            <input onChange={e => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Full Name' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>School Email</p>
                            <input onChange={e => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='School Email' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Position</p>
                            <select onChange={e => setExperience(e.target.value)} value={experience} className='border rounded px-2 py-2'>
                                <option value="President">President</option>
                                <option value="Vice President">Vice President</option>
                                <option value="Secretary">Secretary</option>
                                <option value="Treasurer">Treasurer</option>
                                <option value="PRO">PRO</option>
                                <option value="Media Officer">Media Officer</option>
                                <option value="Asst. Media Officer">Asst. Media Officer</option>
                                <option value="Quality Manager">Quality Manager</option>
                                <option value="Head Peer Tutor">Head Peer Tutor</option>
                                <option value="Member">Member</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Subject</p>
                            <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border rounded px-2 py-2'>
                                <option value="None">None</option>
                                <option value="History">History</option>
                                <option value="English">English</option>
                                <option value="Physics">Physics</option>
                                <option value="Calculus">Calculus</option>
                                <option value="Pharmacology">Pharmacology</option>
                                <option value="Mathematics">Mathematics</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>College</p>
                            <input onChange={e => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='e.g College of Teachers Education' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Student ID</p>
                            <input onChange={e => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='22-3344-567' required />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p className='mb-2'>Availability</p>
                    <div className="border rounded px-3 py-2">
                        <DatePicker
                            selected={null}
                            onChange={handleAvailabilityChange}
                            showTimeSelect
                            dateFormat="Pp"
                            placeholderText="Pick a date and time"
                            isClearable
                            multiple
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Select multiple availability slots if needed.</p>
                </div>

                <div>
                    <p className='mt-4 mb-2'>About Peer Facilitator</p>
                    <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' rows={5} placeholder='Write about peer facilitator'></textarea>
                </div>

                <button type='submit' className='bg-[#0f291f] hover:bg-[#53645e] px-10 py-3 mt-4 text-white rounded-full'>Add peer facilitator</button>
            </div>
        </form>
    )
}

export default AddDoctor
