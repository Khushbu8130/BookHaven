
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard"; // Updated import for CourseCard component
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [booklist, setBookList] = useState([]);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const res = await axios.get("http://localhost:4001/booklist");
        console.log(res.data);
        setBookList(res.data);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    getBookList();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Welcome Section */}
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our collection of free engineering books, organized by branch. Whether you're studying Computer Science, Mechanical, Civil, Electrical, or more, you'll find a variety of textbooks and resources to help you learn and grow. Start reading today and enhance your knowledge!


          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Courses Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {booklist.length > 0 ? (
            booklist.map((item) => (
              <CourseCard key={item.id} item={item} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No books available at the moment.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;

