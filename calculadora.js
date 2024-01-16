export const suma=(v1,v2)=>v1+v2;

export const resta=(v1,v2)=>v1-v2;

export const multi=(v1,v2)=>v1*v2;

export const divi=(v1,v2)=>{
    if(v2==0)
        return "Division imposible, osea que no se puede"
    else
        return v1/v2;
}

var pi=3.141516;

const validar = ()=>{
    return "validacion";
}

export {suma,resta,multi,divi as division,pi};