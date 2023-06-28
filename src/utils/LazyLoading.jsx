/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Definir las variantes de animación para la opacidad y el desplazamiento vertical
const variants = {
  hidden: { opacity: 0, y: 50 }, // Cuando el componente está "oculto", tendrá una opacidad de 0 y se desplazará 50px hacia abajo
  visible: { opacity: 1, y: 0 }, // Cuando el componente está "visible", tendrá una opacidad de 1 y no habrá desplazamiento vertical
};

function LazyLoading({ children }) {
  const ref = useRef(); // Crear una referencia que se adjuntará al elemento que se está observando
  const [isVisible, setIsVisible] = useState(false); // Iniciar un estado para rastrear si el elemento es visible o no

  // Cuando el componente se monta, configurar el IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { // Esta función se llama cada vez que el elemento entra o sale del viewport
        if (entry.isIntersecting) { // Si el elemento está en el viewport
          setIsVisible(true); // Actualizar el estado para indicar que el elemento es visible
          observer.unobserve(entry.target); // Dejar de observar el elemento
        }
      },
      {
        root: null, // Utilizar el viewport como el elemento raíz
        rootMargin: '0px', // No añadir ningún margen al elemento raíz
        threshold: 0.1, // La cantidad de elemento que tiene que estar en el viewport antes de que se active el callback (10% en este caso)
      }
    );

    // Si la referencia está adjunta a un elemento, comenzar a observar ese elemento
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cuando el componente se desmonta, dejar de observar el elemento
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Renderizar el componente motion.div con las animaciones apropiadas
  // La animación se inicia en "hidden" y se anima a "visible" cuando el elemento entra en el viewport
  return (
    <motion.div ref={ref} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={variants} transition={{ duration: 0.8, ease: "easeOut" }}>
      {children} {/* Renderizar los hijos del componente */}
    </motion.div>
  );
}

export default LazyLoading;

