
const signup=(req,res)=>{
//code will be right here
const {name,email,password,confirmPassword}=req.body;
console.log(name,email,password,confirmPassword);
return  res.status(200).json({
    success:false,
    data:{}
});
}

module.exports={
    signup
}