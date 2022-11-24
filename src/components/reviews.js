/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'
import { Avatar, Center } from '@chakra-ui/react'
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    RadioGroup,
    HStack,
    Radio,
} from '@chakra-ui/react'

const Review = (props) => {


    return (
        <div className='m-8'>
            <Avatar name={props.name} />
            <div>
                <p>
                    {props.name}
                </p>
                <p>Rating {props.rating}</p>

                <div className="flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>

            </div>
            <p className='mt-4'>
                {props.content}
            </p>

        </div>
    )
}

const Head = ({ reviews }) => {
    const reviewScale = { 1: 'mid', 2: 'mid', 3: 'good', 4: 'nice', 5: 'excellent' }
    const avg = (Object.values(reviews).reduce((sum, { rating }) => sum + rating, 0)) / reviews.length
    console.log(avg)
    return (
        <div className='m-8'>
            <div className="flex items-center mb-5">
                <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">{avg.toFixed(1)}</p>
                <p className="ml-2 font-medium">{reviewScale[Math.ceil(avg)]}</p>
                <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full"></span>
                <p className="text-sm font-medium text-gray-500 ">{reviews.length} reviews</p>
            </div>
        </div>
    )
}

const AddReview = (props) => {
    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeContent = (event) => setContent(event.target.value)
    const handleSumbit = (event) => {
        //post to server
        event.preventDefault()
        const reviewObject = {
            id: props.reviews.length + 1,
            content: content,
            name: name,
            rating: rating,
        }

        axios
            .post('http://10.1.16.165:3001/reviews', reviewObject)
            .then(response => {
                props.setReviews(props.reviews.concat(response.data))
                setName('')
                setContent('')
                setRating(0)
                props.setReviewGiven(true)
            })
    }

    return (
        <div className=''>
            <p className='text-center text-2xl'>add review</p>
            <div className='flex items-center justify-center'>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input size={'md'} value={name} onChange={handleChangeName} />
                    <FormLabel>review</FormLabel>
                    <Input size={'md'} value={content} onChange={handleChangeContent} />
                    <FormLabel>rating</FormLabel>
                    <RadioGroup>
                        <HStack spacing='24px'>
                            <Radio onClick={() => setRating(1)} value='1'>1</Radio>
                            <Radio onClick={() => setRating(2)} value='2'>2</Radio>
                            <Radio onClick={() => setRating(3)} value='3'>3</Radio>
                            <Radio onClick={() => setRating(4)} value='4'>4</Radio>
                            <Radio onClick={() => setRating(5)} value='5'>5</Radio>
                        </HStack>
                    </RadioGroup>
                    <Center>
                        <Button
                            mt={4}
                            colorScheme='blue'
                            type='submit'
                            onClick={handleSumbit}
                        >
                            Submit
                        </Button>
                    </Center>
                </FormControl>
            </div>
        </div>
    )
}

export default function Reviews() {
    const [reviews, setReviews] = useState([
        {
            "id": 1,
            "content": "New Amsterdam is an amazing place for the jewish people to prosper with equal rights and opportunities.",
            "name": "Nathan Selig",
            "rating": 5
        }, {
            "id": 2,
            "content": "New Amsterdam provides much economic opportunity with many open job positions as well as an equal and just taxation system. Unlike Europe, New Amsterdam allows Jews to participate equally in society, with no limitations on Jewish practice. ",
            "name": "Ezra Silver",
            "rating": 5
        }, {
            "id": 3,
            "content": "New Amsterdam is a great place to go if you want to escape persecution. With low taxes and unrestricted involvement in economic trade. and its a great place to start a family with great government rule",
            "name": "Benji Rizman",
            "rating": 5
        }])
    /*    useEffect(() => {
            axios
                .get('http://10.1.16.165:3001/reviews')
                .then(response => {
                    setReviews(response.data)
                })
        }, [])*/

    return (
        <>
            <div id='reviews' className='border-t-2 border-color:rgb(221, 221, 221) mt-4 mx-8 w-max bg-white h-fit'>
                <Head reviews={reviews} />
                <div className='w-4/5 flex'>
                    {reviews.map(review =>
                        <Review key={review.id} name={review.name} content={review.content} rating={review.rating} />
                    )}
                </div>
            </div>
        </>
    )
}




