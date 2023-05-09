import { useEffect, useState } from "react"

export const Values = ({values}) => {

const {tower, floor, conference_room, pickedDate, time} = values
const [datePicked, setDate] = useState('')
const [timePicked, setTime] = useState('')

    function Date() {
        
        let year = pickedDate.substring(11, 15)
        let monthRaw = pickedDate.substring(4, 7)
        let day = pickedDate.substring(8, 10)

        let month = ''
        switch(monthRaw) {
            case 'Jan':
                month = 'января'
                break
            case 'Feb':
                month = 'февраля'
                break
            case 'Mar':
                month = 'марта'
                break
            case 'Apr':
                month = 'апреля'
                break
            case 'May':
                month = 'мая'
                break
            case 'Jun':
                month = 'июня'
                break
            case 'Jul':
                month = 'июля'
                break
            case 'Aug':
                month = 'августа'
                break
            case 'Sep':
                month = 'сентября'
                break
            case 'Oct':
                month = 'октября'
                break
            case 'Nov': 
                month = 'ноября'
                break
            case 'Dec':
                month = 'декабря'
                break
            default: 
                month = monthRaw
        }

        let regex = /^0\d/
        if (day.match(regex)) {
        day = day.slice(1)
        }
        
        let date = day + ' ' + month + ' ' + year + 'г.'
        return date
    }

    function Time() {
        let timePicked = time + ':00'
        return timePicked
    }

    useEffect(() => {
        setDate(Date())
        setTime(Time())
    }, [values])

    return (
        <div className='message_container'>
        <span>{`Вы забронировали переговорную №${conference_room} на ${floor} этаже в башне ${tower}. Ждем Вас ${datePicked} в ${timePicked}.`}</span>
        </div>
    )
}