
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-black-100 py-10 px-4 bg-black-500 md:px-10">
        <div className="container mx-auto max-w-4xl bg-white shadow-md rounded-lg p-6 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            About Us
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Welcome to <span className="font-semibold">BookHaven</span>, your
            go-to platform for free access to engineering books. Our mission is
            to make education accessible and affordable for every student,
            especially those pursuing technical fields.
          </p>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              We believe that quality education should not be a luxury. With
              BookHaven, we aim to bridge the gap by offering a diverse
              collection of books that students can read online or download for
              free. This platform is specially curated for engineering students
              to find resources tailored to their syllabus and interests.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Read books online for free, anytime, anywhere.</li>
              <li>Download books for offline access.</li>
              <li>
                Categorized collection of books covering all major engineering
                branches and subjects.
              </li>
              <li>Responsive and user-friendly interface for seamless navigation.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              In the future, we aim to expand our library to include interactive
              content such as video tutorials and project ideas. We are also
              working on collaborating with educators to provide additional
              resources and personalized learning experiences.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Why Choose Us?
            </h3>
            <p className="text-gray-600">
              Unlike other platforms, BookWorld focuses solely on empowering
              engineering students by removing barriers to quality education.
              Whether you're preparing for exams, working on projects, or
              exploring new topics, we’ve got you covered.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>



  );
};

export default About;