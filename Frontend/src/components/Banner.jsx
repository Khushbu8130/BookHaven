
import React, { useState } from "react";
import toast from "react-hot-toast";

function Banner() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Incorrect email");
      return;
    }

    setError(""); // Clear error message
    setIsSubscribed(true);
    toast.success("Your email has been subscribed!");
    setEmail(""); // Clear email input
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Discover a world of knowledge and stories without any cost. At
            BookHaven, we believe in sharing free resources, empowering
            everyone to read, learn, and grow. Explore a wide range of books
            across genres, all available for free. Your journey to unlimited
            reading starts here!
          </p>
          <div>
            <label className="input input-bordered flex items-center gap-2  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
        <button
          className={`btn mt-6 ${isSubscribed ? "btn-success" : "btn-secondary"
            }`}
          onClick={handleSubscribe}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="order-1 w-full mt-20 md:w-1/2">
        <img
          src="/Banner3.png" // <-- Updated to use URL path
          className="md:w-[550px] md:h-[460px] md:ml-12"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
