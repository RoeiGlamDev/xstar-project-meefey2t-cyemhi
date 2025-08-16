import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations specifically for AI's VidNexus platform.
 * This hook leverages modern animation techniques to enhance user experience
 * on the AI website, utilizing the brand colors of red, orange, and white.
 * 
 * @returns {Object} - An object containing animation controls.
 */
export function useAnimation() {
  const elementRef = useRef<HTMLElement | null>(null);

  /
   * Initializes the animation on the specified element.
   * This function applies a fade-in effect and a sliding transition
   * suitable for showcasing AI-generated videos on VidNexus.
   */
  const initAnimation = () => {
    if (elementRef.current) {
      elementRef.current.style.opacity = '0';
      elementRef.current.style.transform = 'translateY(20px)';
      elementRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      // Triggering the animation to start
      requestAnimationFrame(() => {
        elementRef.current!.style.opacity = '1';
        elementRef.current!.style.transform = 'translateY(0)';
      });
    }
  };

  useEffect(() => {
    initAnimation();
  }, []);

  return {
    elementRef,
    initAnimation
  };
}