import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser" //Uses to manage email contact messages.
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { styles } from "../styles"
//template_rw1ar6o
//service_r5li6oo
//WXAXlKUCWyKORns5W


const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_r5li6oo", 
      "template_rw1ar6o",
      {
        from_name: form.name,
        to_name: "Shivam",
        from_email:form.email,
        to_email: "chansoriyashivam@gmail.com",
        message: form.message,
      },
      "WXAXlKUCWyKORns5W" ) .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you soon as soon as possible.")
      });

      setForm({
        name: "",
        email: "",
        message: "",
      }, (error) => {
        setLoading(false);
        console.log(error);

        alert("Something went wrong!!!");
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left","tween",  0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>
          Get In Touch
        </p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>

        <form ref={fromRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label> 
           <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>  
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea rows="6"type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Message !!"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <button type="submit" className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" >
            {loading? "Sending...": "Send"}
          </button>
        </form>

      </motion.div>

      <motion.div variants={slideIn("right","tween",  0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthCanvas  />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");