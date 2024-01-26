import React from 'react'

function Loading() {
  return (
    <main>
        
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {Array.from({length: 12}, (_, index) => index + 1).map(num=>(
                <div key={num} className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"></div>
            ))}
        </div>
    </main>
  )
}

export default Loading