export const checkValidation =(email,password)=>{
console.log(email,password);
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    if(!emailValid) return "Eamil is not valid !"
    if(!passValid) return "Password is not valid !"

    return null

}