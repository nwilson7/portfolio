function Contact() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-y-6 rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
      <form className="flex w-full flex-col gap-y-4">
        <label htmlFor="cname">Name:</label>
        <input
          type="text"
          id="cname"
          name="cname"
          className="rounded border border-gray-300 p-2"
        />

        <label htmlFor="cemail">Email:</label>
        <input
          type="email"
          id="cemail"
          name="cemail"
          className="rounded border border-gray-300 p-2"
        />

        <label htmlFor="cmessage">Message:</label>
        <textarea
          id="cmessage"
          name="cmessage"
          rows="4"
          className="rounded border border-gray-300 p-2"
        ></textarea>

        <button
          type="submit"
          className="mt-4 rounded bg-black px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
