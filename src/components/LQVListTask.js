import React from 'react'

export default function LQVListTask({renderLQVListTasks,onLQVTaskEdit,onLQVTaskDelete}) {
    console.log(renderLQVListTasks);
    // Hàm xử lý khi sửa
    const LQVHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onLQVTaskEdit(param) //Đẩy lên App thông qua props (onLQVTaskEdit)
    }
    // Hàm xử lý khi xóa
    const LQVHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onLQVTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    //render data
    let LQVElementTask = renderLQVListTasks.map((task, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.LQV_taskId}</td>
                    <td>{task.LQV_taskName}</td>
                    <td>{task.LQV_level}</td>
                    <td>
                        <button className='btn btn-success'
                        onClick={()=>LQVHandleEdit(task)}
                        >Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>LQVHandleDelete(task)}
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
                {LQVElementTask}
            </tbody>
        </table>
    </div>
  )
}
