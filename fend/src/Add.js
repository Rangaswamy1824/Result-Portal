//  add.js
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    let [data, setData] = useState({ "_id": "", "name": "", "phno": "", "gen": "", "sub1": "", "sub2": "", "sub3": "", "sub4": "" })
    let [status, setstatus] = useState("")
    let fun = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }
    let add = () => {
        axios.post("http://localhost:5000/add", data).then((res) => {
            setstatus(res.data.msg)
            if (res.data.msg !== "error in adding record") {
                setData({ "_id": "", "name": "", "phno": "", "gen": "", "sub1": "", "sub2": "", "sub3": "", "sub4": "" })
            }

        })
    }
    return ( <
        div className = 'back' >
        <
        div > { status } < /div><
        div class = "marks" > <
        input type = 'text'
        placeholder = 'Enter id'
        name = "_id"
        onChange = { fun }
        value = { data._id }
        />  <
        input type = 'text'
        placeholder = 'Enter your name '
        name = "name"
        onChange = { fun }
        value = { data.name }
        />

        <
        input type = 'text'
        placeholder = 'Enter Phno'
        name = "phno"
        onChange = { fun }
        value = { data.phno }
        /> <
        input type = 'radio'
        name = "gen"
        value = "male"
        onChange = { fun }
        checked = { data.gen == 'male' }
        />Male <
        input type = 'radio'
        name = 'gen'
        value = "female"
        onChange = { fun }
        checked = { data.gen == 'female' }
        />Female </div > < div class = "marks" >

        <
        input type = 'text'
        placeholder = 'Sub1'
        name = "sub1"
        onChange = { fun }
        value = { data.sub1 }
        /> <
        input type = 'text'
        placeholder = 'Sub2'
        name = "sub2"
        onChange = { fun }
        value = { data.sub2 }
        /> <
        input type = 'text'
        placeholder = 'Sub3'
        name = "sub3"
        onChange = { fun }
        value = { data.sub3 }
        /> <
        input type = 'text'
        placeholder = 'Sub4'
        name = "sub4"
        onChange = { fun }
        value = { data.sub4 }
        /> </div >
        <
        button onClick = { add } > Add < /button> 



        <
        /div >
    )
}

export default Add