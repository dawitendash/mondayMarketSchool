<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        return ["message"=>"hello"];
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'Profile'  => 'required|string',
            'Fullname' => 'required|string',
            'Section'  => 'required|string',
            'Class'    => 'required|string',
            'Status'   => 'required|string',
        ]);

        $student = Student::create($validated);

        return response()->json($student, 201);
    }
}
