import './App.css';
import {React,useState} from 'react'
import LQVListTask from './components/LQVListTask';
import LQVTaskAddOrEdit from './components/LQVTaskAddOrEdit';

function App() {
    //mock data
    const tdd_listTasks = [
      { LQV_taskId:2210900083,LQV_taskName:"Lê Quốc Vương", LQV_level:"Small" },
      { LQV_taskId:2, LQV_taskName:"Học lập trình reactjs",LQV_level:"Medium"},
      { LQV_taskId:3, LQV_taskName:"Lập trình với Frontend - Reactjs",LQV_level:"High"},
      { LQV_taskId:4, LQV_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",LQV_level:"Small"},
    ]
    //sử dụng hàm usestate của hook để lưu trữ trạng thái dữ liệu
    const [LQVListTasks,setLQVListTasks] = useState(LQV_ListTasks);
    
    //tạo state dữ liệu cho form(add, edit)
    const LQVTaksObj={
      LQV_taskId:0, 
      LQV_taskName:"",
      LQV_level:""
  };
    //taoj state
    const [LQVTask,setLQVTask] = useState(LQVTaksObj);//dữ liệu trên form
      // state đê phân biệt trạng thái là thêm mới hay sửa
  const [LQVIsAddOrEdit, setLQVIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

    //nhận dữ liệu khi sửa
    const LQVHandleEdit =(param)=>{
      console.log("App-Edit:",param);
      //cập nhật lại LQVTask
      setLQVTask(param);
      // Cập nhật trạng thái form là sửa
    setLQVIsAddOrEdit(false);
    };

    const LQVHandleSubmit = (LQVParam)=>{
      console.log("App:",LQVParam);
      if(LQVIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
        setLQVListTasks((prev) => {
          return [...prev, LQVParam];
        });
      }else{ // Trường hợp sử dữ liệu
        for (let i = 0; i < LQVListTasks.length; i++) {
            if(LQVListTasks[i].LQV_taskId == LQVParam.LQV_taskId){
              LQVListTasks[i] = LQVParam;
              break;
            }
        }
        // Cập nhật lại state (LQVListTasks)
      setLQVListTasks(prev=>{
        return[
          ...prev,
          LQVParam
        ]
    })
    }
    // Hàm xóa
  const LQVHandleDelete = (param)=>{
    let LQVResult = LQVListTasks.filter(x=>x.LQV_taskId != param.LQV_taskId);
    setLQVListTasks(LQVResult);
  }
    
    return (
      <div className="container border">
        <h1>Lê Quốc Vương</h1>
        <hr/>
        <div>
          {/* {danh sách list task} */}
          <LQVListTask renderLQVListTasks ={LQVListTasks} 
                      onLQVTaskEdit = {LQVHandleEdit}
                      onLQVTaskDelete={LQVHandleDelete}
          />
        </div>
        <div>
          <LQVTaskAddOrEdit 
           renderLQVIsAddOrEdit = {LQVIsAddOrEdit}
            renderLQVTask = {LQVTask}
            LQVOnSubmit={LQVHandleSubmit} />
        </div>
      </div>
      
    );
}
}
export default App;
