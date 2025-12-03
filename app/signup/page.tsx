"use client";
import React from 'react'
import { Form } from '../components/ui/Form';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const page = () => {
  return (
    <div>
      <Card>
        <Form>
          <Input
            variant={"outline"}
            inputSize={"sm"}
          />
          <Button
            variant={"secondary"}
            buttonSize={"lg"}
            className='bg-white'
            type='submit' >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default page
