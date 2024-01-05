import { Link } from "@remix-run/react"
import {MouseEvent} from "react"

const navigations = [
  {label: 'About', to: 'about'},
  {label: 'Projects', to: 'projects'},
  {label: 'Blog', to: 'blog'},
  {label: 'Contact', to: 'contact'}
]

export default function Navbar() {
  let styles = {
    width: 0,
    transform: 'translateX(80px)',
    opacity: 0
  }
  const handleMouseEnter = (e: MouseEvent) => {
    console.log('clientRects >> ', e.currentTarget.getClientRects())
    console.log('boundingClientRects >> ', e.currentTarget.getBoundingClientRect())
    styles = {
      ...styles,
      width: e.currentTarget.getBoundingClientRect().width,
      opacity: 1
    }
  }

  const handleMouseLeave = (e: MouseEvent) => {
    console.log('width >> ', e.currentTarget.clientWidth)
  }

  return (
    <nav>
      <div style={styles} className="abosulte top-0 left-0 h-10 bg-red"/>
      <ul className="flex items-center rounded-full p-2 border border-[#E2E8FF]/10 relative">
        {
          navigations.map(({label, to}) => {
            return (
              <li key={label} className="mr-[2px] last:mr-0">
                <Link to={to} className="py-2 px-5 flex items-center justify-center rounded-full text-[#E2E8FF]/70 transition-colors hover:text-white"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >{label}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}