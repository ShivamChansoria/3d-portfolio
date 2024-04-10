import { motion } from "framer-motion"
import { github } from "../assets"
import { projects } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import { Tilt } from "react-tilt"
import { TangentSpaceNormalMap } from "three"

const ProjectCard = ({ index, name, description, tags, image, source_code, source_code_link, host_link }) => {
  return(
    <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75)}>
      <Tilt options={
        {
          max:45, scale: 1, speed: 450
        }
      } 
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
         <div className="relative w-full h-[230px] w"> \
         <img src={image} alt={name} className="w-full h-full object cover rounded-2xl" />
         <div className="absolute inset-0 flex justify-end m-3 card img_hover" >
          <div onClick={()=> window.open( source_code_link, "_blank")} 
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
         </div>
         </div>
         <div onClick={()=> window.open( host_link, "_blank")} className="mt-8 cursor-pointer">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
         </div>
         <div className="mt-4 flex flex-wrap gap-2" >
          {tags.map((tag) => (
            <p key={tag.name} className={tag.color+
              " text-[14px]"
            }>
            #{tag.name}
            </p>
          ))}
         </div>
      </Tilt>
    </motion.div>
  )
}

const Works = ( ) => {
  return (
    <> <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      My Work</p>
    <h2 className={styles.sectionHeadText}>
    Projects.</h2>
   </motion.div>
   <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" >
        Following projects showcases my skills and experience through real-world example of my work. Each project is briefly described with liks to code repositories in GitHub. It reflects my ability to solve comples problems, design responsive websites and work with different technologies, manage the projects effectively.
        </motion.p>
   </div>
   <div className="mt-20 flex flex-wrap gap-7 ">
    {projects.map((project, index) => (
      <ProjectCard key={"project-"+index} index={index} {...project} />
    ))}
   </div>
   </>
  )
}

export default SectionWrapper(Works, "")