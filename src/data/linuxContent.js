export const linuxContent = {
  "1": {
    title: "What is the difference between a process and a thread?",
    sections: [
      {
        heading: "Process",
        text: "An independent program in execution with its own memory space, file descriptors, and system resources. Processes are isolated from each other[reference:59]."
      },
      {
        heading: "Thread",
        text: "A lightweight unit of execution within a process. Threads share the same memory space and resources of the process, making communication easier but requiring synchronization[reference:60]."
      }
    ]
  },
  "2": {
    title: "Explain the Linux boot process step by step.",
    sections: [
      {
        heading: "Step 1: BIOS/UEFI",
        text: "Power-On Self-Test (POST) checks hardware. BIOS/UEFI loads the bootloader from the boot device[reference:61]."
      },
      {
        heading: "Step 2: Bootloader (GRUB)",
        text: "GRUB presents a boot menu and loads the Linux kernel and initramfs into memory[reference:62][reference:63]."
      },
      {
        heading: "Step 3: Kernel Initialization",
        text: "The kernel initializes core subsystems (CPU, memory, interrupts, device drivers) and mounts the root filesystem (read-only initially)[reference:64]."
      },
      {
        heading: "Step 4: Init Process (PID 1)",
        text: "The kernel starts the init process (systemd on modern systems). This mounts filesystems, starts services, and enters the default runlevel or target[reference:65][reference:66]."
      }
    ]
  },
  "3": {
    title: "How do you check running processes and kill a process?",
    sections: [
      {
        heading: "Viewing Processes",
        text: "`ps aux` or `ps -ef` shows a static snapshot of all running processes[reference:67]. `top` and `htop` show real-time process information with CPU and memory usage[reference:68]."
      },
      {
        heading: "Killing a Process",
        text: "`kill <PID>` sends SIGTERM (graceful termination). `kill -9 <PID>` sends SIGKILL (forceful termination). `pkill <name>` kills by process name[reference:69]."
      }
    ]
  },
  "4": {
    title: "Explain chmod 644. What do those numbers mean?",
    sections: [
      {
        heading: "Octal Notation",
        text: "Each digit represents permissions for owner, group, and others. 4 = read, 2 = write, 1 = execute. `644` means: owner has read+write (6), group has read (4), others have read (4)[reference:70]."
      },
      {
        heading: "Common Examples",
        text: "`755` — owner: rwx, group: r-x, others: r-x (common for directories/executables). `600` — owner: rw, no others (common for private files like SSH keys)[reference:71]."
      }
    ]
  },
  "5": {
    title: "What is the difference between an absolute and a relative path?",
    sections: [
      {
        heading: "Absolute Path",
        text: "Starts from the root directory (`/`). Example: `/home/user/documents/file.txt`. Always points to the same location regardless of current directory[reference:72]."
      },
      {
        heading: "Relative Path",
        text: "Starts from the current directory. Example: `documents/file.txt` or `./file.txt`. `..` refers to the parent directory. Changes based on where you are[reference:73]."
      }
    ]
  },
  "6": {
    title: "How do you check disk space usage on Linux?",
    sections: [
      {
        heading: "df (Disk Free)",
        text: "`df -h` shows disk usage for all mounted filesystems in human-readable format (GB, MB)[reference:74]."
      },
      {
        heading: "du (Disk Usage)",
        text: "`du -sh <directory>` shows the total size of a specific directory. `du -sh *` shows sizes of all items in the current directory[reference:75]."
      }
    ]
  },
  "7": {
    title: "What is the difference between hard link and soft link?",
    sections: [
      {
        heading: "Hard Link",
        text: "A hard link is another name for the same file on disk — it points to the same inode. If the original file is deleted, the hard link still works. Cannot cross filesystems[reference:76]."
      },
      {
        heading: "Soft Link (Symbolic Link)",
        text: "A soft link is a special file that points to another file by path. If the original file is deleted, the link breaks. Can cross filesystems and link to directories[reference:77]."
      }
    ]
  },
  "8": {
    title: "How do you troubleshoot a slow Linux server?",
    sections: [
      {
        heading: "CPU Check",
        text: "Use `top` or `htop` to identify processes consuming high CPU[reference:78]."
      },
      {
        heading: "Memory Check",
        text: "Use `free -h` to check RAM usage. `vmstat` shows memory and CPU statistics[reference:79]."
      },
      {
        heading: "Disk I/O Check",
        text: "Use `iostat` to check disk I/O. High I/O wait can indicate disk bottlenecks[reference:80]."
      },
      {
        heading: "Network Check",
        text: "Use `netstat` or `ss` to check network connections. `iftop` shows real-time network bandwidth[reference:81]."
      }
    ]
  },
  "9": {
    title: "What is the difference between cron and systemd timers?",
    sections: [
      {
        heading: "Cron",
        text: "Traditional job scheduler. Uses crontab files with syntax: minute hour day month day-of-week command. System-wide cron jobs are in `/etc/crontab` and `/etc/cron.d/`[reference:82]."
      },
      {
        heading: "Systemd Timers",
        text: "Modern replacement for cron. Uses `.timer` units with `OnCalendar` (date-based) or `OnBootSec`/`OnUnitActiveSec` (time-based). Better logging via journald, dependency management, and can run missed jobs on boot[reference:83]."
      }
    ]
  },
  "10": {
    title: "What is the purpose of the /etc/passwd and /etc/shadow files?",
    sections: [
      {
        heading: "/etc/passwd",
        text: "Stores user account information: username, UID, GID, home directory, and shell. Historically stored password hashes but now uses 'x' placeholder[reference:84]."
      },
      {
        heading: "/etc/shadow",
        text: "Stores encrypted password hashes and password aging information. Only readable by root for security. Contains the actual hash, last changed date, and expiration policies[reference:85]."
      }
    ]
  }
};