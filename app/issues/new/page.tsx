import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-3'>
            <TextField.Root placeholder='Title' />
            <TextArea placeholder='description' />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage