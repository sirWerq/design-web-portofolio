/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';
import ButtonForm from '/src/components/ButtonForm';
import { useState } from 'react';

export default function ContactComponent() {
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='inline-block relative mt-10 lg:mt-0'
            >
                <h2 className='font-bold text-2xl lg:text-3xl tracking-wider'>
                    CONTACT
                </h2>
                <div className='absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500'></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <p className='lg:text-2xl text-center'>
                    Feel free to Contact me by submitting the form below and I
                    will get back to you as soon as possible
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-[50%] bg-white dark:bg-[#121212] shadow-sm'
            >
                <form action='' className='p-10 space-y-5'>
                    <div className='flex flex-col w-full space-y-1'>
                        <label htmlFor='' className='ml-2 font-semibold'>
                            Name
                        </label>
                        <input
                            type='text'
                            className='w-full h-12 rounded-lg bg-zinc-100 dark:bg-white ring-1 ring-violet-500 p-3'
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='flex flex-col w-full space-y-1'>
                        <label htmlFor='' className='ml-2 font-semibold'>
                            Email
                        </label>
                        <input
                            type='text'
                            className='w-full h-12 rounded-lg bg-zinc-100 dark:bg-white ring-1 ring-violet-500 p-3'
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='flex flex-col w-full space-y-1'>
                        <label htmlFor='' className='ml-2 font-semibold'>
                            Message
                        </label>
                        <textarea
                            className='w-full h-64 rounded-lg bg-zinc-100 dark:bg-white ring-1 ring-violet-500 p-3'
                            required
                            autoComplete='off'
                        />
                    </div>
                    <ButtonForm
                        text={'Submitting'}
                        textDisable={'Submmit'}
                        isSubmit={isSubmit}
                    />
                </form>
            </motion.div>
        </>
    );
}
