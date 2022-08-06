
let id = parseInt(window.localStorage.getItem('maxId') || '0')


const create =()=>{
    id += 1;
    window.localStorage.setItem('maxId',JSON.stringify(id))
    return id
}

export default create;
