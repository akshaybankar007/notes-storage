export const osContent = {
  "1": {
    title: "What is an Operating System? What are its main functions?",
    sections: [
      {
        heading: "Operating System Definition",
        text: "An operating system is system software that acts as an interface between hardware and application programs. Its main functions include process management, memory management, file system management, device management, and providing security and user interfaces."
      }
    ]
  },
  "2": {
    title: "What is the difference between a process and a thread?",
    sections: [
      {
        heading: "Process",
        text: "A process is an independent program in execution with its own memory space and system resources."
      },
      {
        heading: "Thread",
        text: "A thread is a lightweight unit of execution within a process. Threads share the same memory space of the process, which makes communication easier but requires synchronization."
      }
    ]
  },
  "3": {
    title: "What is a Process Control Block (PCB)?",
    sections: [
      {
        heading: "Process Control Block",
        text: "A PCB is a data structure maintained by the operating system to store information about a process. It includes the process state, program counter, CPU registers, memory management information, scheduling information, and I/O status."
      }
    ]
  },
  "4": {
    title: "What is context switching?",
    sections: [
      {
        heading: "Context Switching",
        text: "Context switching is the process of saving the state of a currently running process or thread and loading the state of another so that execution can resume later. It enables multitasking but introduces overhead."
      }
    ]
  },
  "5": {
    title: "What are different types of CPU scheduling algorithms?",
    sections: [
      {
        heading: "CPU Scheduling Algorithms",
        text: "Common scheduling algorithms include First Come First Serve (FCFS), Shortest Job First (SJF), Round Robin, Priority Scheduling, and Multilevel Queue scheduling. Each algorithm balances factors such as waiting time, turnaround time, and fairness differently."
      }
    ]
  },
  "6": {
    title: "What is deadlock? What are its necessary conditions?",
    sections: [
      {
        heading: "Deadlock Definition",
        text: "Deadlock is a situation where two or more processes are waiting indefinitely for resources held by each other."
      },
      {
        heading: "Four Necessary Conditions",
        text: "The four necessary conditions are: mutual exclusion, hold and wait, no preemption, and circular wait."
      }
    ]
  },
  "7": {
    title: "What is starvation?",
    sections: [
      {
        heading: "Starvation",
        text: "Starvation occurs when a process is indefinitely denied access to resources because other processes continuously receive priority. It typically happens in priority-based scheduling systems."
      }
    ]
  },
  "8": {
    title: "What is paging?",
    sections: [
      {
        heading: "Paging",
        text: "Paging is a memory management technique that divides physical memory into fixed-size blocks called frames and logical memory into same-sized blocks called pages. A page table maps page numbers to frame numbers, eliminating external fragmentation and simplifying memory allocation."
      }
    ]
  },
  "9": {
    title: "What is segmentation?",
    sections: [
      {
        heading: "Segmentation",
        text: "Segmentation is a memory management technique where memory is divided into variable-sized segments based on logical divisions such as code, data, or stack. It supports logical organization but may suffer from external fragmentation."
      }
    ]
  },
  "10": {
    title: "What is virtual memory?",
    sections: [
      {
        heading: "Virtual Memory",
        text: "Virtual memory is a technique that allows a system to use disk space as an extension of RAM. It enables execution of programs larger than physical memory by loading only required pages into memory on demand."
      }
    ]
  },
  "11": {
    title: "What is thrashing?",
    sections: [
      {
        heading: "Thrashing",
        text: "Thrashing occurs when the system spends more time swapping pages in and out of memory than executing actual processes. It typically happens when there is insufficient memory and too many processes."
      }
    ]
  },
  "12": {
    title: "What is the difference between user mode and kernel mode?",
    sections: [
      {
        heading: "User Mode",
        text: "User mode is a restricted mode where applications run without direct access to hardware or critical system resources."
      },
      {
        heading: "Kernel Mode",
        text: "Kernel mode is a privileged mode where the operating system runs and has full access to hardware and memory."
      }
    ]
  }
};