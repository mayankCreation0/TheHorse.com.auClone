import { USERSTATUS } from "./actionType";
import { STOREDATA } from "./actionType";

export const userstatus=(value)=>(
{
    type:USERSTATUS,
    payload:value,
})
export const storedata=(value)=>(
    {
        type:STOREDATA,
        payload:value,
    })