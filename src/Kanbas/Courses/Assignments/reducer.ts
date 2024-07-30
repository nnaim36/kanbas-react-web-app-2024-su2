import { createSlice } from "@reduxjs/toolkit";
import { modules, assignments} from "../../Database";

const initialState = {
    assignments:assignments,
};

const assignmentSlice = createSlice({name: "assignments" ,
    initialState,
    reducers:{
        addAssignment:(state,{payload:assignment}) =>{
            const newAssignment: any ={
                _id:new Date().getTime().toString(),
                title: assignment.title,
                course : assignment.course,
                description: assignment.description,
                points: assignment.points,
                avail_date : assignment.avail_date,
                due_date: assignment.due_date,
                until_date: assignment.until_date,
            }
            state.assignments = [...state.assignments,newAssignment] as any;
        },
        
        deleteAssignment: (state, { payload: assignmentId }) => {
          console.log("reducer assingment:",assignmentId);
            state.assignments = state.assignments.filter(
              (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>{
              if(m._id === assignment._id) {
                return assignment ;
               } 
               else{
                return m;
               }
        })},
          editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m: any) =>
              m._id === assignmentId ? { ...m, editing: true } : m
            ) as any;
          },
          setAssignment: (state, action) => {
            state.assignments = action.payload;
          }
          
          
        
    },
});

export const {addAssignment,deleteAssignment,updateAssignment,editAssignment,setAssignment} = 
    assignmentSlice.actions;

export default assignmentSlice.reducer;

