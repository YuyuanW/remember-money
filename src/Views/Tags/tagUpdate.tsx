import { useEffect, useRef } from "react"

const useTagUpdate = (fn:()=>void,deps:any[])=>{
    let count = useRef(0)
    useEffect(()=>{count.current+=1})
    useEffect(()=>{
        if(count.current>1){
            fn()
        }
    },deps)
}
export default useTagUpdate;