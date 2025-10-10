import React from 'react'

// ...existing code...
const Container = ({ groups = null }) => {
  const data = groups ?? [
    {
      heading: "The Faculty",
      info: [
        { name: "Abhi", department: "CSE", src: "" },
         { name: "Abhi", department: "CSE", src: "" },
          { name: "Abhi", department: "CSE", src: "" }
      ]
    },
    {
      heading: "The Generals",
      // info missing here previously caused .map on undefined
    }
  ]

  return (
    <section className="w-full min-h-screen bg-black text-white font-[roboto]">
      <div className="max-w-6xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        {data.map((group, gi) => {
          const people = group.info ?? []
          return (
            <div key={gi} className="mb-12">
              <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">{group.heading}</h2>
              <div className="
                w-full 
                grid gap-y-10 gap-x-6
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                xl:grid-cols-4
                justify-items-center
              ">
                {people.map((person, i) => (
                  <div
                    key={i}
                    className="
                      w-full max-w-xs 
                      flex flex-col items-center gap-4 p-4
                       rounded-xl bg-black text-white  
                      transition-transform duration-200 hover:scale-105
                    "
                  >
                    <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                      {person.src ? (
                        <img src={person.src} alt={person.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-gray-400">No image</div>
                      )}
                    </div>

                    <article className="text-center font-[roboto] !text-white">
                      <h3 className="font-semibold text-base sm:text-lg ">{person.name}</h3>
                      <p className="text-sm ">{person.department}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Container
