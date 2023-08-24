import './Card.css'
export default function Card({ className, children, id }) {
  return <div className={'card ' + className} id={id}> {children} </div>
}