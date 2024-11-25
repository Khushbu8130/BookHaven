import React from "react";

function CourseCard({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92  h-[500px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">


          <figure>
            {item.image ? (
              <img src={item.image} alt={item.name} className="h-30 w-full object-cover" />
            ) : (
              <div className="h-48 w-full flex items-center justify-center bg-gray-200 text-gray-500">
                Image not available
              </div>
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              >
                Open
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;



