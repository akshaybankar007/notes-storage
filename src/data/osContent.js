export const osContent = {
  1: {
    title: "Processes vs Threads",
    sections: [
      { heading: "Process", text: "An executing instance of a program. It is heavyweight and has an isolated memory space. Context switching between processes is slow because it requires saving and loading the entire Process Control Block (PCB)." },
      { heading: "Thread", text: "A lightweight unit of execution within a process. Threads share the same memory space, code, and resources of their parent process. Context switching is faster because only the Thread Control Block (TCB) needs to be updated." }
    ]
  },
  2: {
    title: "CPU Scheduling Algorithms",
    sections: [
      { heading: "Preemptive vs Non-Preemptive", text: "Non-preemptive algorithms let a process run until it terminates or blocks. Preemptive algorithms can forcefully interrupt a running process to allocate the CPU to another process." },
      { heading: "Common Algorithms", text: "1. FCFS (First Come First Serve): Simple, non-preemptive, suffers from Convoy Effect.\n2. SJF (Shortest Job First): Optimal for turnaround time, but can cause starvation for longer jobs.\n3. Round Robin: Preemptive, uses a time quantum. Excellent for interactive systems.\n4. Priority: Executes based on assigned priority; uses 'Aging' to prevent starvation." }
    ]
  },
  3: {
    title: "Process Synchronization",
    sections: [
      { heading: "The Critical Section Problem", text: "A segment of code where shared variables are accessed. Only one process should be allowed to execute in its critical section at a time to prevent race conditions." },
      { heading: "Mutex vs Semaphore", text: "A Mutex (Mutual Exclusion) is a locking mechanism. Only the thread that acquired the lock can release it. A Semaphore is a signaling mechanism using an integer counter. Any thread can signal (increment) a semaphore." },
      { heading: "Deadlocks", text: "A state where two or more processes are blocked forever, each waiting for a resource held by the other. Requires 4 Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait." }
    ]
  },
  4: {
    title: "Memory Management",
    sections: [
      { heading: "Paging vs Segmentation", text: "Paging divides memory into fixed-size blocks (pages/frames) to eliminate external fragmentation. Segmentation divides memory into variable-sized logical blocks (functions, arrays) based on the user's view of memory." },
      { heading: "Virtual Memory", text: "Allows the execution of processes that are not completely in RAM. It abstracts main memory into a large, uniform array of storage, mapping logical addresses to physical addresses using a Page Table." },
      { heading: "Thrashing", text: "Occurs when a system spends more time page-faulting (swapping pages in and out of the disk) than actually executing instructions, causing CPU utilization to plummet." }
    ]
  }
};