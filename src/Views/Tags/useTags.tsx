import React from "react";
import create from "lib/created";

const defaultId = [
    {id:create(),name:'衣'},
    {id:create(),name:'食'},
    {id:create(),name:'住'},
    {id:create(),name:'行'},
]


const useTags = ()=>{
    const [tags,setTags] = 
    React.useState<{id:number,name:string}[]>(defaultId) 
    const findId = (id:number)=> tags.filter(t=>t.id===id)[0]
    

    return {tags,setTags,findId}
}

export default useTags;