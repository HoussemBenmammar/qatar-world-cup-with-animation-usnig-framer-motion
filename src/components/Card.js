import './card.css'
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const imageAnimate  ={
  offscreen:{y:'-100',opacity:0},
  onscreen:{
  y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}

}

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}

}

export default function Card({ image, h2, p,id }) {
   const {ref,inView} = useInView({
    threshold:0.2 
   })
   const imageAnimation = useAnimation() 
   const textAnimation = useAnimation() 

   useEffect(()=>{
    if (inView) {
      imageAnimation.start({
        x:0,
        opacity:1,
        transition: {type:"spring",
        bounce:0.4,
        duration:1.2
      }
      })
      textAnimation.start({
        x:0,
        opacity:1,
        transition: {type:"spring",
        bounce:0.2,
        duration:1
      }
      })
    }
    if(!inView) {
      imageAnimation.start({
        x:'-100vw',opacity:0
      })
      textAnimation.start({
        x:'100vw',opacity:0
      })
    }
    console.log(inView);
   },[inView])
    
  return (
    <motion.div className="card" id={id} ref={ref}
    >
      <motion.img  className="image-container"       
        animate={imageAnimation} src={image}
      ></motion.img>
      <motion.h2 
        animate={textAnimation}
      >{h2}</motion.h2>
      <motion.p
         animate={textAnimation}    
      >{p}</motion.p> 
    </motion.div>
  );
}


