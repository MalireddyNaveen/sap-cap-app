const onBeforeEmployeeCreated=async (req)=>{
    const {DOB}=req.data
     const iage=_getAge(DOB);
         
         if(iage>=25){
             req.data.age=iage;
         }
         else{
             req.error("Your age is under 25");
         }
 
 };
 const onAfterEmployeeCreated=async (req)=>{
     const FName=req.fName;
     req.fName=`Mr.${FName}`;
 }
 
 const _getAge=(sDate)=>{
     const today=new Date();
     birtday=new Date(sDate)
     const age=today.getFullYear()-birtday.getFullYear()
     return age
 
 }
 
 module.exports={
    onBeforeEmployeeCreated,
    onAfterEmployeeCreated
 }
 
 
 