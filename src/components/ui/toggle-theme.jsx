import { useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { cn } from '@/lib/utils'

export const ToggleTheme = ({
  className,
  duration = 400,
  animationType = 'circle-spread',
  ...props
}) => {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    switch (animationType) {
      case 'circle-spread':
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        )
        break

      case 'round-morph':
        document.documentElement.animate(
          [
            { opacity: 0, transform: 'scale(0.8) rotate(5deg)' },
            { opacity: 1, transform: 'scale(1) rotate(0deg)' },
          ],
          {
            duration: duration * 1.2,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            pseudoElement: '::view-transition-new(root)',
          }
        )
        break

      case 'swipe-left':
        document.documentElement.animate(
          { clipPath: [`inset(0 0 0 ${viewportWidth}px)`, `inset(0 0 0 0)`] },
          { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: '::view-transition-new(root)' }
        )
        break

      case 'swipe-up':
        document.documentElement.animate(
          { clipPath: [`inset(${viewportHeight}px 0 0 0)`, `inset(0 0 0 0)`] },
          { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: '::view-transition-new(root)' }
        )
        break

      case 'fade-in-out':
        document.documentElement.animate(
          { opacity: [0, 1] },
          { duration: duration * 0.5, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
        )
        break

      case 'shrink-grow':
        document.documentElement.animate(
          [{ transform: 'scale(0.9)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }],
          { duration: duration * 1.2, easing: 'cubic-bezier(0.19, 1, 0.22, 1)', pseudoElement: '::view-transition-new(root)' }
        )
        document.documentElement.animate(
          [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(1.05)', opacity: 0 }],
          { duration: duration * 1.2, easing: 'cubic-bezier(0.19, 1, 0.22, 1)', pseudoElement: '::view-transition-old(root)' }
        )
        break

      case 'wave-ripple':
        document.documentElement.animate(
          { clipPath: [`circle(0% at 50% 50%)`, `circle(${maxRadius}px at 50% 50%)`] },
          { duration: duration * 1.5, easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', pseudoElement: '::view-transition-new(root)' }
        )
        break

      case 'none':
      default:
        break
    }
  }, [isDark, duration, animationType])

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleTheme}
        className={cn(
          'p-2 rounded-full transition-colors duration-300',
          isDark ? 'hover:text-amber-400' : 'hover:text-blue-500',
          className
        )}
        aria-label="Toggle theme"
        {...props}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {animationType !== 'flip-x-in' && (
        <style dangerouslySetInnerHTML={{
          __html: `
            ::view-transition-old(root),
            ::view-transition-new(root) {
              animation: none;
              mix-blend-mode: normal;
            }
          `,
        }} />
      )}
    </>
  )
}
