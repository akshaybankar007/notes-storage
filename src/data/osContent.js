// osContent.js
export const osContent = {
  "1": {
    title: "Process Management",
    sections: [
      {
        heading: "Process States",
        text: "A process transitions through new, ready, running, waiting, and terminated states. The OS uses a process control block (PCB) to store process metadata."
      },
      {
        heading: "Process Creation and Termination",
        text: "Processes are created by system calls like fork() (Unix) or CreateProcess() (Windows). Termination occurs via exit() or when an error occurs. The parent can wait for child termination."
      },
      {
        heading: "Context Switching",
        text: "The kernel saves the state of the current process and loads the saved state of the next process. This involves switching registers, memory maps, and file descriptors, with overhead that affects performance."
      }
    ]
  },
  "2": {
    title: "Threads and Concurrency",
    sections: [
      {
        heading: "Thread Types",
        text: "User-level threads are managed by user libraries (e.g., pthreads) without kernel intervention; kernel-level threads are managed by the OS. Many-to-one, one-to-one, and many-to-many models describe the mapping."
      },
      {
        heading: "Concurrency Issues",
        text: "Race conditions occur when multiple threads access shared data concurrently. Synchronization mechanisms (mutexes, semaphores) are required to ensure data consistency."
      },
      {
        heading: "Threading Models",
        text: "The one-to-one model maps each user thread to a kernel thread (Linux, Windows). Many-to-one maps many user threads to one kernel thread (early Unix). Many-to-many allows multiplexing."
      }
    ]
  },
  "3": {
    title: "CPU Scheduling Algorithms",
    sections: [
      {
        heading: "FCFS (First-Come, First-Served)",
        text: "The simplest algorithm: processes are executed in order of arrival. It suffers from the convoy effect, where short jobs wait for long jobs."
      },
      {
        heading: "SJF (Shortest Job First)",
        text: "Chooses the process with the smallest next CPU burst. It is optimal in terms of average waiting time but requires prediction of burst lengths. Preemptive SJF is also called Shortest Remaining Time First (SRTF)."
      },
      {
        heading: "Round Robin",
        text: "Each process gets a time quantum (e.g., 10-100 ms). If not finished, it is preempted and placed at the end of the ready queue. Fair and responsive, but quantum size affects performance."
      },
      {
        heading: "Priority Scheduling",
        text: "Each process has a priority; the highest priority runs first. Priorities can be static or dynamic. Starvation of low-priority processes is mitigated via aging."
      }
    ]
  },
  "4": {
    title: "Deadlock",
    sections: [
      {
        heading: "Four Necessary Conditions",
        text: "Mutual exclusion, hold and wait, no preemption, and circular wait. All four must occur simultaneously for deadlock to exist."
      },
      {
        heading: "Deadlock Prevention",
        text: "Break any of the four conditions. For example, require processes to request all resources at once (breaking hold and wait) or allow preemption."
      },
      {
        heading: "Deadlock Avoidance",
        text: "The Banker's Algorithm checks resource allocation states to ensure safety. It requires knowledge of maximum future demands."
      },
      {
        heading: "Deadlock Detection and Recovery",
        text: "Periodically run an algorithm to detect cycles in the wait-for graph. Recovery can involve process termination or resource preemption."
      }
    ]
  },
  "5": {
    title: "Memory Management",
    sections: [
      {
        heading: "Paging",
        text: "Physical memory is divided into fixed-size frames; logical memory into pages. A page table maps page numbers to frame numbers. This eliminates external fragmentation."
      },
      {
        heading: "Segmentation",
        text: "Memory is divided into variable-sized segments (e.g., code, data, stack). Each segment has a base and limit, enabling logical separation but causing external fragmentation."
      },
      {
        heading: "Combined Paging and Segmentation",
        text: "Many systems use segmentation with paging (e.g., x86). Segments have page tables, providing flexibility and efficient memory use."
      }
    ]
  },
  "6": {
    title: "Virtual Memory",
    sections: [
      {
        heading: "Demand Paging",
        text: "Pages are loaded into memory only when needed (on page faults). The page fault handler loads the page from disk, possibly evicting another page."
      },
      {
        heading: "Page Replacement Algorithms",
        text: "When memory is full, a page must be evicted. Common algorithms: FIFO, Optimal (future knowledge), LRU (Least Recently Used), Clock (second-chance)."
      },
      {
        heading: "Thrashing",
        text: "When a process spends more time paging than executing, thrashing occurs. It can be mitigated by adjusting the degree of multiprogramming or using working-set models."
      }
    ]
  },
  "7": {
    title: "File Systems",
    sections: [
      {
        heading: "File Organization",
        text: "Files can be structured as contiguous, linked, or indexed allocation. Contiguous offers fast sequential access; linked uses pointers; indexed uses an index block for direct access."
      },
      {
        heading: "Directory Structure",
        text: "Directories map file names to file metadata (inodes). Single-level, two-level, tree, and acyclic graph structures are common."
      },
      {
        heading: "File System Examples",
        text: "FAT (File Allocation Table) is simple but lacks permissions. NTFS supports ACLs, journaling, and compression. ext4 is Linux's standard, with extents and journaling."
      }
    ]
  },
  "8": {
    title: "I/O Management",
    sections: [
      {
        heading: "Device Drivers",
        text: "Drivers are kernel modules that communicate with hardware controllers. They translate OS requests into device-specific commands."
      },
      {
        heading: "Buffering and Caching",
        text: "Buffering stores data temporarily to smooth data transfer between device and memory. Caching keeps frequently accessed data in faster storage (e.g., disk cache)."
      },
      {
        heading: "Spooling",
        text: "Spooling (Simultaneous Peripheral Operation On-Line) overlaps I/O of one job with computation of another, e.g., print spooler queuing print jobs."
      },
      {
        heading: "I/O Scheduling",
        text: "Disk scheduling algorithms (SCAN, C-SCAN, SSTF) optimize disk head movement to reduce seek time and improve throughput."
      }
    ]
  },
  "9": {
    title: "Interprocess Communication (IPC)",
    sections: [
      {
        heading: "Pipes",
        text: "Unidirectional (or bidirectional) data streams between related processes. Anonymous pipes are for parent-child; named pipes (FIFOs) exist in the file system."
      },
      {
        heading: "Message Queues",
        text: "Messages are sent to a queue and retrieved by receivers. They allow multiple senders/receivers and can have priorities."
      },
      {
        heading: "Shared Memory",
        text: "Multiple processes map the same physical memory region. It is the fastest IPC but requires explicit synchronization (e.g., semaphores)."
      },
      {
        heading: "Sockets",
        text: "Used for communication between processes on the same or different hosts. They support both stream (TCP) and datagram (UDP) communication."
      }
    ]
  },
  "10": {
    title: "Synchronization",
    sections: [
      {
        heading: "Mutex (Mutual Exclusion)",
        text: "A mutex allows only one thread to hold it at a time. It is used to protect critical sections. Must be acquired and released."
      },
      {
        heading: "Semaphores",
        text: "A semaphore has a counter that can be incremented (signal) and decremented (wait). Binary semaphore (0/1) acts as mutex; counting semaphore controls access to a limited resource."
      },
      {
        heading: "Monitors",
        text: "A high-level synchronization construct that encapsulates shared data and procedures. Only one thread can be active in a monitor at a time; condition variables enable waiting/signaling."
      },
      {
        heading: "Classic Problems",
        text: "Producer-Consumer, Readers-Writers, and Dining Philosophers are classic synchronization problems used to illustrate different mechanisms."
      }
    ]
  },
  "11": {
    title: "System Calls",
    sections: [
      {
        heading: "Common System Call Categories",
        text: "Process control (fork, exec, exit), file management (open, read, write, close), device management (ioctl), information maintenance (getpid, time), and communication (pipe, shmget)."
      },
      {
        heading: "fork() and exec()",
        text: "fork() creates a new process (child) that is a duplicate of the parent. exec() loads a new program into the current process, replacing its image."
      },
      {
        heading: "System Call Flow",
        text: "A user program invokes a system call via a library function; the CPU switches to kernel mode, handles the call, and returns to user mode. The underlying mechanism uses interrupts or traps."
      }
    ]
  },
  "12": {
    title: "Boot Process",
    sections: [
      {
        heading: "BIOS/UEFI",
        text: "BIOS (Basic I/O System) or UEFI (Unified Extensible Firmware Interface) performs POST (Power-On Self-Test), initializes hardware, and loads the bootloader from a boot device."
      },
      {
        heading: "Bootloader",
        text: "Bootloader (e.g., GRUB, LILO, Windows Boot Manager) loads the kernel into memory, passes parameters, and transfers control. It may support multiple OSes (dual-boot)."
      },
      {
        heading: "Kernel Initialization",
        text: "The kernel initializes internal data structures, drivers, and mounts the root file system. It then starts the init process (PID 1), which spawns user-space services."
      },
      {
        heading: "Init and Systemd",
        text: "Init is the first user-space process; systemd is a modern init system that manages services, parallel startup, and dependency handling."
      }
    ]
  },
  "13": {
    title: "Security and Protection",
    sections: [
      {
        heading: "Access Control",
        text: "Discretionary Access Control (DAC) allows owners to set permissions (Unix rwx, Windows ACLs). Mandatory Access Control (MAC) enforces system-wide policies (SELinux, AppArmor)."
      },
      {
        heading: "Authentication",
        text: "Users authenticate via passwords, biometrics, or tokens. The OS stores hashed passwords and may use challenge-response or multi-factor authentication."
      },
      {
        heading: "Security Threats",
        text: "Malware (viruses, worms, Trojans), buffer overflows, privilege escalation, and denial-of-service (DoS) are common. Mitigations include ASLR, DEP, and sandboxing."
      },
      {
        heading: "Secure Design Principles",
        text: "Least privilege, defense in depth, and fail-safe defaults. The OS should minimize attack surface and validate all inputs."
      }
    ]
  },
  "14": {
    title: "Distributed Operating Systems",
    sections: [
      {
        heading: "Transparency",
        text: "Location transparency (access resources by name, not location), migration transparency (resources can move), replication transparency (multiple copies), and failure transparency (recover from failures)."
      },
      {
        heading: "Communication",
        text: "Distributed systems use message passing over networks. Remote Procedure Call (RPC) abstracts communication as local procedure calls. Reliable communication protocols (e.g., TCP) ensure delivery."
      },
      {
        heading: "Distributed File Systems",
        text: "Examples: NFS (Network File System), AFS (Andrew File System). They allow access to remote files as if local, with caching and consistency semantics."
      },
      {
        heading: "Clock Synchronization",
        text: "Logical clocks (Lamport) and vector clocks order events. Physical clocks use NTP (Network Time Protocol) to synchronize time across nodes."
      }
    ]
  },
  "15": {
    title: "Real-Time Operating Systems (RTOS)",
    sections: [
      {
        heading: "Hard vs. Soft Real-Time",
        text: "Hard real-time: missing a deadline causes catastrophic failure (e.g., medical devices). Soft real-time: deadlines are desirable but not critical (e.g., multimedia streaming)."
      },
      {
        heading: "RTOS Scheduling",
        text: "Rate Monotonic Scheduling (RMS) assigns fixed priorities based on periods; Earliest Deadline First (EDF) is dynamic and optimal. Preemptive scheduling is common."
      },
      {
        heading: "RTOS Features",
        text: "Deterministic behavior, low interrupt latency, priority inversion handling (priority ceiling protocol), and minimal context-switch overhead. Examples: VxWorks, FreeRTOS, QNX."
      }
    ]
  },
  "16": {
    title: "Virtualization and Hypervisors",
    sections: [
      {
        heading: "Type 1 vs. Type 2 Hypervisors",
        text: "Type 1 (bare-metal) runs directly on hardware (e.g., VMware ESXi, KVM). Type 2 runs on a host OS (e.g., VirtualBox, VMware Workstation)."
      },
      {
        heading: "Hardware-Assisted Virtualization",
        text: "Intel VT-x and AMD-V add CPU instructions to reduce virtualization overhead. They support guest OS execution in non-root mode with traps to the hypervisor."
      },
      {
        heading: "Paravirtualization and Full Virtualization",
        text: "Full virtualization emulates hardware; paravirtualization requires modified guest OS for improved performance (e.g., Xen)."
      }
    ]
  },
  "17": {
    title: "Shell and Command Interpreter",
    sections: [
      {
        heading: "Shell Types",
        text: "Common shells: sh (Bourne), bash (Bourne Again), csh, zsh. Each offers different features: history, job control, aliases, and variable expansions."
      },
      {
        heading: "Command Execution",
        text: "The shell parses the command line, expands wildcards and variables, finds the executable using PATH, and forks a child to execute it (via exec)."
      },
      {
        heading: "Shell Scripting",
        text: "Scripts combine commands, conditionals, loops, and functions. They are powerful for system administration and automation (e.g., cron jobs)."
      }
    ]
  }
};