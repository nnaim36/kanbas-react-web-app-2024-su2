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
            state.assignments = state.assignments.filter(
              (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
              m._id === assignment._id ? assignment : m
            ) as any;
          },
          editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m: any) =>
              m._id === assignmentId ? { ...m, editing: true } : m
            ) as any;
          },
    },
});

export const {addAssignment,deleteAssignment,updateAssignment,editAssignment} = 
    assignmentSlice.actions;

export default assignmentSlice.reducer;