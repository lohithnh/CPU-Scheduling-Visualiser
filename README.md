
# CPU Scheduling Visualiser

This project aims to provide a simple yet insightful visualization of the FCFS and Round Robin CPU scheduling algorithms using HTML and CSS. By leveraging the power of web technologies, we intend to create Gantt chart that visually represents the execution timeline of processes under these algorithms.


## Methodology


Queue Structure:

    • Maintain a ready queue for processes as they arrive.
    • Processes are initially added to the ready queue based on their arrival time, adhering tothe FCFS principle.
First Come First Serve (FCFS) Execution:

    • Select the process at the front of the ready queue based on its arrival time.
    • Allow the selected process to execute until it completes or until it has used up its allocated time quantum.
Round Robin (RR) Time Slicing:

    • Implement time slicing (quantum) for each process to ensure fair distribution of CPU time.
    • If a process does not complete within its time slice, preempt it and move it to the back of the ready queue.
Preemption:

    • After a process completes its execution or gets blocked, if there are other processes in the ready queue, select the next process based on the FCFS principle.
    • If the time quantum of the selected process expires before it completes, preempt it and move it to the back of the ready queue.
Continue Cycling:

    • Continue this cyclic process of FCFS and RR until all processes are completed.

## Outputs : 
![alt text](https://github.com/lohithnh/CPU-Scheduling-Visualiser/blob/main/FCFS.jpeg?raw=true)


![alt text](https://github.com/lohithnh/CPU-Scheduling-Visualiser/blob/main/RR.jpeg?raw=true)
