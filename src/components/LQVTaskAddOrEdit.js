import React, { useEffect, useState } from 'react'

export default function LQVTaskAddOrEdit({renderLQVTask,renderLQVIsAddOrEdit,LQVOnSubmit}) {
    //đối tượng task
    // const LQVTaskObj={
    //     LQV_taskId:0, 
    //     LQV_taskName:"",
    //     LQV_level:""
    // }
    const [LQVTask,setLQVTask] = useState(renderLQVTask);
    useEffect(()=>{
        setLQVTask(renderLQVTask)
    },[renderLQVTask])

     // tạo tiêu đề form
     const LQVTieuDe = renderLQVIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    //hàm xử lý sự kiện thay đổi trên điều khiển
    const LQVHandleChange = (LQVEvent) => {
        let name = LQVEvent.target.name;
        let value = LQVEvent.target.value;
        setLQVTask(prev=>{
            return{
                ...prev,
                [name]: value,
            }
            
        })
    }
    console.log(LQVTask);
    const LQVHandleSubmit =(LQVEvent)=>{
        LQVEvent.preventDefault();
        LQVOnSubmit(LQVTask);
    }
  return (
    <div>
        <h2>{LQVTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input 
                name='LQV_taskId' value={LQVTask.LQV_taskId} onChange={LQVHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task Name</span>
                <input 
                name='LQV_taskName' value={LQVTask.LQV_taskName} onChange={LQVHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                <select name='LQV_level' value={LQVTask.LQV_level} onChange={LQVHandleChange} className="form-control" 
                placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon3"> 
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={LQVHandleSubmit} classNameName='btn btn-primary'>Ghi Lại</button>
        </form>
    </div>
  )
}
