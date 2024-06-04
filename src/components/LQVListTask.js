import React from 'react'

export default function TddListTask({renderTddListTasks,onTddTaskEdit,onTddTaskDelete}) {
    console.log(renderTddListTasks);
    // Hàm xử lý khi sửa
    const tddHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onTddTaskEdit(param) //Đẩy lên App thông qua props (onTddTaskEdit)
    }
    // Hàm xử lý khi xóa
    const tddHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onTddTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    //render data
    let tddElementTask = renderTddListTasks.map((task, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.tdd_taskId}</td>
                    <td>{task.tdd_taskName}</td>
                    <td>{task.tdd_level}</td>
                    <td>
                        <button className='btn btn-success'
                        onClick={()=>tddHandleEdit(task)}
                        >Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>tddHandleDelete(task)}
                        >Remove</button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
            </thead>
            <tbody>
                {tddElementTask}
            </tbody>
        </table>
    </div>
  )
}
