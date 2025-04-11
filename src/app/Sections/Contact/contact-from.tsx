"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { HeaderTitle } from "@/components/myui/header";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: { success: boolean; message: string } = await res.json();
      setLoading(false);
      setResponseMessage(data.message);
      setIsSuccess(data.success);

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage("Failed to send message. Please try again.");
      setIsSuccess(false);
    }
  };

  // Auto-clear message after 10 seconds
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
        setIsSuccess(null);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer); // Cleanup
    }
  }, [responseMessage]);

  return (
    <div className="dark:bg-[url('/handshake.svg')] bg-repeat bg-[length:400px_200px] md:px-10 md:py-20 w-full flex justify-center flex-col items-center mx-auto">
      <HeaderTitle title="Get In Touch" />
      <div className="w-full flex md:flex-row flex-col justify-center items-center ">
        <div className="w-full md:w-80 justify-center items-center">
          <div className="flex justify-center md:w-auto w-56 mx-auto">
            <Image
              src="/msg.gif"
              width={280}
              height={280}
              alt="Contact Me"
            />
          </div>
          <div className="flex flex-wrap p-6 md:rounded-bl-lg md:h-40 md:shadow-lg w-full bg-blue-600 text-white text-lg">
            Let's connect! I'm looking forward to hearing from you and exploring how we can work together.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 dark:bg-gray-900 p-6 rounded-lg shadow-lg md:w-9/12 w-full"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer block w-full px-2.5 pb-2.5 pt-4 text-sm dark:text-white text-gray-950 bg-transparent border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-mycolor"
              placeholder=" "
            />
            <label className="absolute text-sm text-black bg-white dark:text-gray-300 dark:bg-gray-900 px-1 duration-300 transform scale-75 -translate-y-4 top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer block w-full px-2.5 pb-2.5 pt-4 text-sm dark:text-white text-gray-950 bg-transparent border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-mycolor"
              placeholder=" "
            />
            <label className="absolute text-sm text-black bg-white dark:text-gray-300 dark:bg-gray-900 px-1 duration-300 transform scale-75 -translate-y-4 top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Your Mail
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer block w-full px-2.5 pb-2.5 pt-4 text-sm dark:text-white text-gray-950 bg-transparent border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-mycolor md:h-52 h-32 resize-none"
              placeholder=" "
            />
            <label className="absolute text-sm text-black bg-white dark:text-gray-300 dark:bg-gray-900 px-1 duration-300 transform scale-75 -translate-y-4 top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-auto bg-mycolor hover:bg-mycolor/80 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Response Message */}
          {responseMessage && (
            <p
              className={`text-center mt-2 text-sm ${isSuccess ? "text-green-500" : "text-red-500"
                }`}
            >
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
