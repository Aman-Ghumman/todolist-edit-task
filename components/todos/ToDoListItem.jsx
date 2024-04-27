import { cn } from '@/lib/utils/mergeCss'

import { DeleteTask } from '../dialogs/DeleteTask'
import { EditTask } from '../dialogs/EditTask'

function ToDoListItem({ children, className, uid, payload }) {
  const { task, category } = payload

  return (
    <aside
      className={cn(
        'odd:bg-neutral-50 even:bg-gray-100 flex justify-between   py-4 px-3 rounded',
        className
      )}
    >
      <div>
        <p className='text-xs text-neutral-400'>{category}</p>
        <p className='text-sm text-neutral-600'>{task}</p>
      </div>
      <div className='flex flex-col gap-y-1 text-[10px] items-center'>
        <EditTask uid={uid} payload={payload} />

        <DeleteTask uid={uid} payload={payload} />
      </div>
    </aside>
  )
}

export { ToDoListItem }
