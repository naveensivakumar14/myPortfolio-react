function ContactMe() {
    return (
      <div className="h-[70vh] md:h-screen bg-[#dcffd2]">
        <div className="pt-10 md:pt-20">
          <div className="p-4 md:p-8">
            <h1 className=" text-center pb-8 font-light text-2xl md:text-3xl lg:text-5xl">Contact Me</h1>
            <form className="flex flex-col py-5 px-8 md:px-0 md:py-0 items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                  />
                  <input
                    id="email"
                    type="email"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-gray-900 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactMe;
  