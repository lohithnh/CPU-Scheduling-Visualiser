// JavaScript program for implementation of FCFS 
// scheduling with different arrival time 

// Function to find the waiting time for all 
// processes 

	// Process id's 
    var processes = [1, 2, 3]; 
    var n = processes.length; 
    
    // Burst time of all processes 
    var burst_time = [5, 9, 6]; 
    
    // Arrival time of all processes 
    var arrival_time = [0, 3, 6]; 



function getInput() {
    const processCount = parseInt(document.getElementById('process-count').value);
    let inputForm = '<table><tr><th>Process</th><th>Burst Time</th><th>Arrival Time</th></tr>';

    for (let i = 1; i <= processCount; i++) {
        inputForm += `<tr><td>P${i}</td><td><input type="number" id="burst-time-${i}"></td><td><input type="number" id="arrival-time-${i}"></td></tr>`;
    }

    inputForm += '</table>';
    document.getElementById('input-form').innerHTML = inputForm;
}

const processCount = parseInt(document.getElementById('process-count').value);
let burstTimes = [];
let arrivalTimes = [];
let completionTimes = [];
let waitingTimes = [];
let turnaroundTimes = [];

function findWaitingTime(processes , n , bt , wt , at) 
{ 
	var service_time = Array.from({length: n}, (_, i) => 0); 
	service_time[0] = at[0]; 
	wt[0] = 0; 

	// calculating waiting time 
	for (var i = 1; i < n ; i++) 
	{ 
		//representing wasted time in queue 
		var wasted=0; 
		// Add burst time of previous processes 
		service_time[i] = service_time[i-1] + bt[i-1]; 

		// Find waiting time for current process = 
		// sum - at[i] 
		wt[i] = service_time[i] - at[i]; 

		// If waiting time for a process is in negative 
		// that means it is already in the ready queue 
		// before CPU becomes idle so its waiting time is 0 
		// wasted time is basically time for process to 
		// wait after a process is over 
		if (wt[i] < 0) { 
			wasted = Math.abs(wt[i]); 
			wt[i] = 0; 
		} 
		// Add wasted time 
		service_time[i] = service_time[i] + wasted; 
	} 
} 

// Function to calculate turn around time 
function findTurnAroundTime(processes , n , bt, wt , tat) 
{ 
	// Calculating turnaround time by adding bt[i] + wt[i] 
	for (var i = 0; i < n ; i++) 
		tat[i] = bt[i] + wt[i]; 
} 

// Function to calculate average waiting and turn-around 
// times. 
function findavgTime(processes , n , bt , at) 
{ 
	var wt = Array.from({length: n}, (_, i) => 0.0); 
	var tat = Array.from({length: n}, (_, i) => 0.0); 

	// Function to find waiting time of all processes 
	findWaitingTime(processes, n, bt, wt, at); 

	// Function to find turn around time for all processes 
	findTurnAroundTime(processes, n, bt, wt, tat); 

	// Display processes along with all details 
	document.write("Processes " + " Burst Time " + " Arrival Time "
		+ " Waiting Time " + " Turn-Around Time "
		+ " Completion Time <br>"); 
	var total_wt = 0, total_tat = 0; 
	for (var i = 0 ; i < n ; i++) 
	{ 
		total_wt = total_wt + wt[i]; 
		total_tat = total_tat + tat[i]; 
		var compl_time = tat[i] + at[i]; 
		document.write(i+1 + "??" + bt[i] 
		+ "??"
			+ at[i] + "??" + wt[i] + "??"
			+ tat[i] + "??" + compl_time+"<br>"); 
	} 

	document.write("<br>Average waiting time = "
		+ total_wt/n +"<br>"); 
	document.write("<br>Average turn around time = "
		+ total_tat/n+"<br>"); 
} 

// Driver code 

		


findavgTime(processes, n, burst_time, arrival_time); 
