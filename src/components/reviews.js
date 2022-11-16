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
            </div>
            <p className='mt-4'>
                {props.content}
            </p>

        </div>
    )
}

const Head = ({ reviews }) => {
    const reviewScale = {1 : 'mid', 2:'mid', 3:'good', 4:'nice', 5:'excellent'}
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
    const [reviews, setReviews] = useState([])
    const [reviewGiven, setReviewGiven] = useState(false)

    useEffect(() => {
        axios
            .get('http://10.1.16.165:3001/reviews')
            .then(response => {
                setReviews(response.data)
            })
    }, [])

    return (
        <>
            <div id='reviews' className='border-t-2 border-color:rgb(221, 221, 221) mt-4 mx-8 w-full bg-white h-fit'>
                <Head reviews={reviews} />
                <div className='w-3/5 flex'>
                    {reviews.map(review =>
                        <Review key={review.id} name={review.name} content={review.content} rating={review.rating} />
                    )}
                </div>
                {!reviewGiven ?
                    <AddReview reviews={reviews} setReviews={setReviews} setReviewGiven={setReviewGiven} /> : <p>only 1 reveiw</p>
                }
            </div>
        </>
    )
}




