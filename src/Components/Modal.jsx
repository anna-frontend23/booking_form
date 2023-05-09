import { useEffect } from 'react'
import './modal.css'

export const Modal = ({active, setActive, children}) => {

return (
    
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
    
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}> 
        {children}
        <div className='thanks_btn_container'><button type='submit' onClick={() => setActive(false)} className='thanks_btn'><span>Спасибо!</span></button></div>
        </div>
        
    </div>
    
)}