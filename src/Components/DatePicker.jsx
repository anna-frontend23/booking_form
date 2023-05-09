import { useState } from "react"
import ReactDatePicker, {registerLocale} from "react-datepicker"
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("ru", ru);


export const DatePicker = ({ field, form, ...props }) => {

const [date, setDate] = useState(null)

const isWeekday = (date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
}

    return(
        <ReactDatePicker 
            locale="ru"
            placeholderText="Выберите дату"
            selected={form.values.pickedDate === '' ? null : date} 
            dateFormat='dd MMM yyyy'
            minDate={new Date()} 
            onChange={date => {
                setDate(date)
                form.setFieldValue('pickedDate', date + ' EDT')
            }}
            onBlur={() => form.setFieldTouched('pickedDate', true)}
            filterDate={isWeekday}
            showMonthDropdown
            className='form_date_container date_field'
        ></ReactDatePicker>
    )
}