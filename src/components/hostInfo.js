import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Center,
} from '@chakra-ui/react'
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Popup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Center>
                <Button onClick={onOpen}>Learn more about host</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Jacob Barmisimon</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            <p>
                                The host for the Jews immigrating to New Amsterdam is none other than Jacob Barmisimon. Not only was he the first Jew in America, but he and the shareholders of the Dutch West Indies company were why the 23 Jews were allowed to settle in New Amsterdam. He petitioned the court to allow Jews full economic opportunities and the ability to serve in the local militia. He also got the Jews to settle in whatever part of New Amsterdam they wanted to. And they had the right to have families with non-Jews and settle in a Christian part of town.
                            </p>
                        </ModalBody>

                    </ModalContent>
                </Modal>
            </Center>
        </div>
    )
}

const Checkin = () => {
    const [startDate, setStartDate] = useState(new Date("1625/01/01"))
    const [endDate, setEndDate] = useState(new Date('1625/01/10'))

    return (

        <div className='m-8'>
            <div className='text-lg mb-4'>
                <p>check in date</p>
                <DatePicker
                    className='hover:cursor-pointer'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div className='text-lg'>
                <p>check out date</p>
                <DatePicker
                    className='hover:cursor-pointer'
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    todayButton="Today"
                />
            </div>
        </div>
    )
}


export default function HostInfo() {

    return (
        <div className='sticky top-0 rounded shadow-md m-8 mt-10 w-1/5 bg-white h-fit right-0 '>
            <div className='flex flex-row'>
                <p className='text-xl m-7' >rentail info</p>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-bold">5</p>
                    <a href="#reviews" className="text-sm ml-2 font-medium text-gray-900 underline hover:no-underline">3 reviews</a>
                </div>
            </div>
            <div className='text-lg mx-8 rounded-full bg-[#aacee6]'>
                <p className='text-center'>price 100$</p>
            </div>
            <Checkin />
            <div className=' m-2'>
                <Popup />
            </div>

        </div>
    )
}