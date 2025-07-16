'use client'
import "./card.css"
type Props = {
  proyecto: string;
};
export default function Card({proyecto}: Props){
return(
    <div className="card">
            <div className='content'>
                <p>jaja{proyecto}</p>
                <p>jaja</p>
                <p>jaja</p>
            </div>
    </div>
)
}