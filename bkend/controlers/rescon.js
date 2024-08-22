// controller => rescon.js
const resmodel = require("../model/res")

let add=async(req,res)=>{
    try{
        let data=new resmodel(req.body)
        await data.save()
        res.json({"msg":"record added"})

    }
    catch(err)
    {
        res.json({"msg":"error in adding record"})
    }

}
let getdata=async(req,res)=>{
    try{
        let data=await resmodel.find({})
        res.json(data)

    }
    catch(err)
    {

    }

}
let getres=async(req,res)=>{
    try{
        let data=await resmodel.findById({"_id":req.params.hno})
        res.json(data)

    }
    catch(err)
    {

    }
}
let del=async(req,res)=>{
    try{
        await resmodel.findByIdAndDelete({"_id":req.params.hno})
        res.json({"msg":"del done"})

    }
    catch(err)
    {

    }

}
module.exports={add,getdata,getres,del}