import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'
import { DatePicker } from "./DatePicker"
import '../Components/BookingForm.css'
import main_pic from '../Assets/main_pic.png'
import { Modal } from "./Modal"
import { useState } from "react"
import { Values } from "./Values"


export const BookingForm = () => {

const [modalActive, setModalActive] = useState(false)
const [values, setValues] = useState({
tower: '',
floor: '',
conference_room: '',
pickedDate: '',
time: ''})

const validationSchema = Yup.object({
    tower: Yup.string()
        .required('Обязательно'),
    floor: Yup.number()
        .required('Обязательно'),
    conference_room: Yup.number()
        .required('Обязательно'),
    pickedDate: Yup.string()
        .required('Обязательно'),
    time: Yup.string()
        .required('Обязательно')
})

return (
    <>
        <Formik 
        initialValues={{
            tower: '',
            floor: '',
            conference_room: '',
            pickedDate: '',
            time: '',
            comment: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, onSubmitProps) => {
            console.log(JSON.stringify(values))
            setValues(values)
            setModalActive(true)
            onSubmitProps.resetForm()
            
        }}>
       
       {({ dirty, resetForm }) => { 
       return (
        
        <>
        
       <div className='form_container'>
    
       <Form className='form'>
        <img src={main_pic} className='main_pic'/>
        
        <div className='form_field_container'>
        <Field name='tower' as='select' className='field'>
            <option defaultValue={true}>Выберите башню</option>
            <option value='A'>А</option>
            <option value='Б'>Б</option>
        </Field>
        <ErrorMessage name='tower' className='text-danger' component='div'/>
        </div>

        
        <div className='form_field_container'>
        <Field name='floor' as='select' className='field'>
            <option defaultValue={true}>Выберите этаж</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
        </Field>
        <ErrorMessage name='floor' className='text-danger' component='div'/>
        </div>

        <div className='form_field_container'>
        <Field name='conference_room' as='select' className='field'>
                <option defaultValue={true}>Выберите переговорную</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
        </Field>
        <ErrorMessage name='conference_room' className='text-danger' component='div'/>
        </div>


        <div className='form_field_container'>
        <Field name='pickedDate' component={DatePicker} className='form_date_container'/>
        <ErrorMessage name='pickedDate' className='text-danger' component='div'/>
        </div>

        <div className='form_field_container'>
        <Field name='time' as='select' className='field'>
                <option defaultValue={true}>Выберите время</option>
                <option value="8">8:00</option>
                <option value="9">9:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
        </Field>
        <ErrorMessage name='time' className='text-danger' component='div'/>
        </div>

        <div className='form_field_container'>
        <Field name='comment' as='textarea' placeholder='Добавьте комментарий' className='form_comment_container date_field'></Field>
        </div>

        <div className='buttons_container'>
        <button disabled={!dirty} onClick={() => {resetForm()}} className='btn'>Очистить</button>
        <button disabled={!dirty} type='submit' className='btn btn_submit'>Забронировать</button>
        </div>
        </Form>
        </div>
        </>
        )}}
        </Formik>

        <Modal active={modalActive} setActive={setModalActive}>
            <Values values={values}/>
        </Modal>
        
    </>
)}