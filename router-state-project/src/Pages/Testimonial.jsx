import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import JsonData from '../JsonData'


const Testimonial = (props) => {

    const [valueText  , setValueText ] = useState({})

    const [value, setValue] = useState(JsonData)

    let getInput = (event) =>{
        // let userData = 
        setValueText({...valueText , [event.target.name]:event.target.value})
        // console.log(userData);
    }

    let addEntery = (event) =>{
        if(event.fname && event.email && event.country && event.messageText){
            let user = [...value , { userName : event.fname, email : event.email, country : event.country, text:event.messageText}]
            setValue(user)
            console.log(user);
        }
        else{
            alert("enter proper datail")
        }
    }

    let deleteData =(e)=>{
        console.log(e);
        let newUser = e.target.value
        // let newUser = value.filter(i => i.userName != e.userName)
        //  setValue(newUser)
         console.log(newUser);
    }

  return (
    <>
        <div className='m-4'>
            <input type='text' name='fname' placeholder='enter your name' onChange={getInput}></input><br/><br/>
            <input type='email' name='email' placeholder='enter your email' onChange={getInput}></input>
            <input type='text' name='country' placeholder='enter your country name' onChange={getInput}></input>
            <input type='text' name='messageText' placeholder='enter your message' onChange={getInput}></input>
            <button type='button' onClick={()=>addEntery(valueText)}>submit</button>

        </div>
        <div className='d-flex row mt-4 pt-4'>
            {
                value.map((val)=>{
                    return(
                        <div className="card col-6" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{val.userName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{val.country}</h6>
                                <p className="card-text">{val.text}</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to={`/${val.userName}`} className="card-link">More detail</Link>
                                    <button type='button' onClick={() => deleteData } className='bg-light bg-gradient text-warning'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
       </div>
    </>
  )
}

export default Testimonial