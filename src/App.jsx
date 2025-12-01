import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const App = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ marginBottom: '30px' }}>Framer Motion Learning Examples</h1>

      {/* 1. BASIC ANIMATION - Simple fade in and move */}
      <div style={{ marginBottom: '50px' }}>
        <h2>1. Basic Animation (initial, animate, transition)</h2>
        <motion.div 
          className="box"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Fade In + Slide Right
        </motion.div>
      </div>

      {/* 2. HOVER & TAP ANIMATIONS */}
      <div style={{ marginBottom: '50px' }}>
        <h2>2. Hover & Tap (whileHover, whileTap)</h2>
        <motion.div 
          className="box"
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            backgroundColor: '#ff6b9d'
          }}
          whileTap={{ 
            scale: 0.95,
            rotate: -5 
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Hover & Click Me!
        </motion.div>
      </div>

      {/* 3. KEYFRAMES ANIMATION */}
      <div style={{ marginBottom: '50px' }}>
        <h2>3. Keyframes (Array values)</h2>
        <motion.div 
          className="box"
          animate={{
            x: [0, 100, 100, 0, 0],
            y: [0, 0, 100, 100, 0],
            rotate: [0, 0, 180, 180, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Square Path
        </motion.div>
      </div>

      {/* 4. VARIANTS - Reusable animations */}
      <div style={{ marginBottom: '50px' }}>
        <h2>4. Variants (Reusable animation states)</h2>
        <motion.div 
          className="box"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5 }
            }
          }}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
        >
          Using Variants
        </motion.div>
      </div>

      {/* 5. ANIMATE PRESENCE - Enter/Exit animations */}
      <div style={{ marginBottom: '50px' }}>
        <h2>5. AnimatePresence (Enter/Exit animations)</h2>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          style={{ 
            padding: '10px 20px', 
            marginBottom: '20px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Toggle Box
        </button>
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className="box"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              Click to Toggle
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 6. SPRING ANIMATION */}
      <div style={{ marginBottom: '50px' }}>
        <h2>6. Spring Physics</h2>
        <motion.div 
          className="box"
          animate={{ x: [0, 200, 0] }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            repeat: Infinity,
            duration: 2
          }}
        >
          Bouncy Spring
        </motion.div>
      </div>

      {/* 7. STAGGER CHILDREN */}
      <div style={{ marginBottom: '50px' }}>
        <h2>7. Stagger Children</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          style={{ display: 'flex', gap: '20px' }}
        >
          {[1, 2, 3, 4].map(num => (
            <motion.div
              key={num}
              className="box"
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              style={{ width: '100px', height: '100px' }}
            >
              {num}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 8. DRAG */}
      <div style={{ marginBottom: '50px' }}>
        <h2>8. Drag (drag, dragConstraints)</h2>
        <motion.div 
          className="box"
          drag
          dragConstraints={{ left: 0, right: 200, top: 0, bottom: 200 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
          style={{ cursor: 'grab' }}
        >
          Drag Me!
        </motion.div>
      </div>
    </div>
  )
}

export default App