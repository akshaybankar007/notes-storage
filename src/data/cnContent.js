export const cnContent = {
  "1": {
    title: "What is the OSI model? Explain its 7 layers.",
    sections: [
      {
        heading: "OSI Model Overview",
        text: "The OSI model is a conceptual framework used to understand network communication. It has seven layers:"
      },
      {
        heading: "Layer 7 – Application",
        text: "Provides network services to end-user applications (e.g., HTTP, SMTP, FTP). It handles user authentication and message formatting."
      },
      {
        heading: "Layer 6 – Presentation",
        text: "Translates data between the application and the network. It handles data encryption, compression, and character encoding (e.g., SSL/TLS, JPEG)."
      },
      {
        heading: "Layer 5 – Session",
        text: "Establishes, manages, and terminates communication sessions (connections) between applications. It handles dialog control and synchronization (e.g., NetBIOS)."
      },
      {
        heading: "Layer 4 – Transport",
        text: "Provides reliable or unreliable data delivery and flow control. Segments data and reassembles it at the destination (e.g., TCP, UDP)."
      },
      {
        heading: "Layer 3 – Network",
        text: "Handles logical addressing and routing of packets across networks (e.g., IP, ICMP). It determines the best path using routing protocols."
      },
      {
        heading: "Layer 2 – Data Link",
        text: "Frames packets and handles physical addressing (MAC addresses). It provides error detection and access control (e.g., Ethernet, PPP)."
      },
      {
        heading: "Layer 1 – Physical",
        text: "Transmits raw bit streams over physical media (e.g., cables, fiber optics). It defines electrical, mechanical, and procedural interfaces."
      }
    ]
  },
  "2": {
    title: "What is the TCP/IP model? How is it different from OSI?",
    sections: [
      {
        heading: "TCP/IP Model Overview",
        text: "The TCP/IP model is a practical networking model used on the internet. It has four layers: Application, Transport, Internet, and Network Access."
      },
      {
        heading: "Differences from OSI",
        text: "Unlike OSI, which is conceptual and has seven layers, TCP/IP is implementation-oriented and combines some OSI layers. For example, OSI's Session and Presentation layers are included within the Application layer in TCP/IP."
      }
    ]
  },
  "3": {
    title: "What is the difference between TCP and UDP?",
    sections: [
      {
        heading: "TCP",
        text: "TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked data transmission. It uses acknowledgments and retransmissions."
      },
      {
        heading: "UDP",
        text: "UDP is connectionless and does not guarantee delivery, order, or error correction. It is faster and used in applications like streaming and gaming where speed is critical."
      }
    ]
  },
  "4": {
    title: "What is a three-way handshake in TCP?",
    sections: [
      {
        heading: "Three-Way Handshake",
        text: "The three-way handshake establishes a TCP connection. First, the client sends a SYN packet. Second, the server responds with SYN-ACK. Third, the client sends an ACK. After this process, the connection is established."
      }
    ]
  },
  "5": {
    title: "What is IP addressing? What is the difference between IPv4 and IPv6?",
    sections: [
      {
        heading: "IP Addressing Definition",
        text: "IP addressing uniquely identifies devices on a network."
      },
      {
        heading: "IPv4",
        text: "IPv4 uses 32-bit addresses and supports around 4.3 billion addresses."
      },
      {
        heading: "IPv6",
        text: "IPv6 uses 128-bit addresses, providing a vastly larger address space and improved routing and security features."
      }
    ]
  },
  "6": {
    title: "What is DNS? How does it work?",
    sections: [
      {
        heading: "DNS Definition",
        text: "DNS translates domain names into IP addresses."
      },
      {
        heading: "How DNS Works",
        text: "When a user enters a domain name, the system queries a DNS resolver, which contacts root, TLD, and authoritative name servers to retrieve the corresponding IP address."
      }
    ]
  },
  "7": {
    title: "What is the difference between HTTP and HTTPS?",
    sections: [
      {
        heading: "HTTP",
        text: "HTTP is a protocol for transferring data between client and server without encryption."
      },
      {
        heading: "HTTPS",
        text: "HTTPS is HTTP over SSL/TLS, providing encrypted communication to ensure data confidentiality and integrity."
      }
    ]
  },
  "8": {
    title: "What is the difference between a switch and a router?",
    sections: [
      {
        heading: "Switch",
        text: "A switch operates at the Data Link layer and forwards data within the same network using MAC addresses."
      },
      {
        heading: "Router",
        text: "A router operates at the Network layer and forwards data between different networks using IP addresses."
      }
    ]
  },
  "9": {
    title: "What is ARP?",
    sections: [
      {
        heading: "ARP Definition",
        text: "ARP (Address Resolution Protocol) maps an IP address to a MAC address within a local network."
      },
      {
        heading: "How ARP Works",
        text: "When a device knows the IP address but not the MAC address, it broadcasts an ARP request to discover the corresponding MAC address."
      }
    ]
  },
  "10": {
    title: "What is the difference between hub, switch, and router?",
    sections: [
      {
        heading: "Hub",
        text: "A hub broadcasts data to all devices in a network segment."
      },
      {
        heading: "Switch",
        text: "A switch forwards data only to the intended device using MAC addresses."
      },
      {
        heading: "Router",
        text: "A router connects different networks and forwards packets based on IP addresses."
      }
    ]
  }
};