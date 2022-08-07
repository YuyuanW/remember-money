import { useEffect, useState } from "react";
import useTagUpdate from "Views/Tags/tagUpdate";

export type HisItems = newHisItem & {
    // tagsId:number[],
    // notes:string,
    // cate : '-' | '+' ,
    // amount : number ,
    createdTime : string // ISO 8601
}

type newHisItem  ={
    tagsId:number[],
    notes:string,
    cate : '-' | '+' ,
    amount : number
}

const useHistory = ()=>{
    const [his,setHis]  = useState<HisItems[]>([]);

    useEffect(()=>{setHis(JSON.parse(window.localStorage.getItem('history') || '[]'))},[])
    useTagUpdate(()=>{window.localStorage.setItem('history',JSON.stringify(his))},[his])

    const addHis = (newItem:newHisItem)=>{
        if(newItem.tagsId.length === 0){ 
            alert('请选择标签') 
            return false
        }else if(newItem.amount <= 0){
            alert('请重新输入有效金额')
            return false
        }
        const dateHis = {...newItem,createdTime:(new Date()).toISOString()}
        setHis([...his,dateHis])
        return true
    }
   
    return {his,addHis}
}

export default useHistory;