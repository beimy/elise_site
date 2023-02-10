import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InfoPage = () => {

    return (
        <div className='flex flex-col justify-center mx-96 my-24  px-5'>
            <h2 className='pb-10 text-8xl'>Leesey Lowdown</h2>
            <p className='text-4xl tracking-wider leading-[3]'>
                Leesey is a New York Based Artist whose work reflects her daily surroundings. From
                bags of Takis to local gift shops of her youth, Leesey works with what she has access
                to, often using leftover materials such as old desks and craft markers to complete her
                works.
                Here are some thoughts from the artist myself:
                I feel like asking what does your art mean is like asking what the meaning of life is.
                You could spin yourself in circles asking what is the point? What is the reason?
                The reason is to have fun.
                The point is to be kind and enjoy yourself.
                Take in every moment of the day, every moment of your life and appreciate it for what it
                is. Celebrate everything you can. Appreciate all of it. My art is a documentation of my
                life and my experiences. Every little thing matters, all those big dreams, all those little
                moments on a 3 day road trip with your best friend, the phone calls with the girl you’ve
                known since sixth grade.
                My art celebrates my experience as a woman, as a girl, as a best friend, and as the
                universe experiencing itself. Constantly curious about its own endless possibilities. This
                is my life. This is what I see. This is what I eat. This is who I talk to.
                This is what I wish was real.
            </p>

        </div>
        
    )
};

export default InfoPage;