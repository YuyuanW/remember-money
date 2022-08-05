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
    const findTag = (id:number)=> tags.filter(t=>t.id===id)[0]
    const findIndex = (id:number)=>{
        let result = -1
        for(let i =0;i<tags.length;i++){
            if(tags[i].id===id){
                result = i;
                break;
            }
            return result
        }
    }
    const tagEdit = (id:number,obj:{name:string})=>{
        const index = findIndex(id)
        const tagsClone =   JSON.parse(JSON.stringify(tags))  
        tagsClone.splice(index,1,{id:id,name:obj.name})
        setTags(tagsClone)
    }
    return {tags,setTags,findTag,findIndex,tagEdit}
}

export default useTags;