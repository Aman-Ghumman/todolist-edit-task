'use client'
import { useFormState } from 'react-dom'

import { toast } from 'sonner'

import { cn } from '@/lib/utils/mergeCss'

import { FormControl, Input, Label } from '.'
import { deleteAction } from '@/actions/deleteTaskAction'

const initialState = {
  message: 'default',
}

function DeleteTaskForm({ children, className, uid, payload }) {
  // formAction is for server and client communication
  const [state, formAction] = useFormState(deleteAction, initialState)
  const { task, category } = payload

  if (state.message === 'success') {
    toast(
      <aside className='bg-green-500 text-lime-50 rounded-lg py-6 text-center'>
        <p> your toast message was saved successfully</p>
      </aside>
    )
  }

  return (
    <section>
      <header>
        <h2 className='text-xs font-light'>
          <span className='font-bold text-green-500'>{state.message}</span>
        </h2>
      </header>
      <form
        action={formAction}
        className={cn('space-y-5  bg-white    py-8 px-4', className)}
      >
        <FormControl className='flex flex-col'>
          <Input hidden name='uid' value={uid} readOnly />
        </FormControl>

        <FormControl className='flex flex-col'>
          <Label htmlFor='category'>Category</Label>
          <Input
            id='category'
            name='category'
            placeholder='enter the task category'
            defaultValue={category}
            readOnly
          />
        </FormControl>

        <FormControl className='flex flex-col'>
          <Label htmlFor='task'>Task</Label>
          <Input
            id='task'
            name='task'
            placeholder='enter a new task'
            defaultValue={task}
            readOnly
          />
        </FormControl>
        <FormControl className='pt-3'>
          <button className='bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold'>
            Delete Task
          </button>
        </FormControl>
      </form>
    </section>
  )
}

export { DeleteTaskForm }
