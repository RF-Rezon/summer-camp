import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({e}) => {
  const router = useNavigate();
  return (
    <div>
      <div>
      <article className="flex bg-white transition hover:shadow-xl">

  <div className="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src={e.photoURL}
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          {e.c_name}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
       {e.description}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <div
        onClick={() => router("/classes")}
        className="block cursor-pointer bg-custom px-5 py-3 text-center text-xs font-bold transition hover:bg-opacity-80 text-white"
      >
        Get this class
      </div>
    </div>
  </div>
</article>
      </div>
    </div>
  )
}

export default SingleCourse
