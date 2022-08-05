import React from "react";
import create from "lib/created";

const useTags = ()=>{
    const [tags,setTags] = 
    React.useState<{id:number,name:string}[]>([
        {id:create(),name:'衣'},
        {id:create(),name:'食'},
        {id:create(),name:'住'},
        {id:create(),name:'行'},
        ]) 
    return {tags,setTags}
}

export default useTags;