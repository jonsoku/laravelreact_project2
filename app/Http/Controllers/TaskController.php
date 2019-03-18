<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//[1]
use \App\Task;

class TaskController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index(Request $request, Task $task)
    {
        //[5] get all the tasks basaed on current user id
        $allTasks = $task->whereIn('user_id', $request->user()->with('user'));
        $tasks = $allTasks->orderBy('created_at', 'desc')->take(20)->get();
        //[6] return json response
        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //[2] validatino
        $this->validate($request, [
            'name' => 'required | max:255',
        ]);
        //[3] create a new task based on user tasks relationship
        $task = $request->user()->tasks()->create([
            'name' => $request->name,
        ]);
        //[4] return tasks with user object
        return response()->json($task->with('user')->find($tasks->id));
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
