import React, { useEffect } from "react";
import create from "lib/created";
// import { json } from "stream/consumers";
import useTagUpdate from "./tagUpdate";



const useTags = ()=>{
    const [tags,setTags] = 
    React.useState<{id:number,name:string}[]>([]) 
    useEffect(()=>{
        let localTag = JSON.parse( window.localStorage.getItem('tag') || '[]' )
        if(localTag.length === 0){
            localTag = [
                {id:create(),name:'衣'},
                {id:create(),name:'食'},
                {id:create(),name:'住'},
                {id:create(),name:'行'},
            ]
        }
        setTags(localTag) 
    },[])
    useTagUpdate(()=>{window.localStorage.setItem('tag',JSON.stringify(tags))},[tags])
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
        setTags(tags.map(t=>(t.id===id?{id:t.id,name:obj.name}:t)))
        // const index = findIndex(id)
        // const tagsClone =   JSON.parse(JSON.stringify(tags))  
        // tagsClone.splice(index,1,{id:id,name:obj.name})
        // setTags(tagsClone)
    }
    const deleteTag = (id:number)=>{
        setTags(tags.filter(t=>t.id!==id))
        // const index = findIndex(id)
        // const tagsClone =   JSON.parse(JSON.stringify(tags))  
        // tagsClone.splice(index,1)
        // setTags(tagsClone)
    }
    const newTag = ()=>{
        const tagName = window.prompt('新标签为：')
        if(tagName===''){
            window.confirm('标签不能为空，请重新输入！')
        }else if(tagName!==null){
            setTags([...tags,{id:create(),name:tagName}])
        }
    }
    return {tags,setTags,findTag,findIndex,tagEdit,deleteTag,newTag}
}

export default useTags;