const Featrures = () => {
  return (
    <div className="mt-12">
      <h1 className="font-semibold text-2xl text-[#2e0a0a]">Features of our Web Site?</h1>
      <ol className="pl-5 list-decimal text-lg mt-4 text-gray-700 leading-10">
        <li><span className="text-gray-800 font-semibold">Add tasks</span> to work on today</li>
        <li><span className="text-gray-800 font-semibold">Set estimate pomodoros</span> (1 = 25min of work) for each tasks</li>
        <li><span className="text-gray-800 font-semibold">Select a task</span> to work on</li>
        <li><span className="text-gray-800 font-semibold">Start timer</span> and focus on the task for 25 minutes</li>
        <li><span className="text-gray-800 font-semibold">Take a break</span> for 5 minutes when the alarm ring</li>
        <li><span className="text-gray-800 font-semibold">Iterate</span> 3-5 until you finish the tasks</li>
      </ol>
    </div>
  )
}

export default Featrures