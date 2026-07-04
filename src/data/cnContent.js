// cnContent.js
export const cnContent = {
  "1": {
    title: "OSI Model",
    sections: [
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
    title: "TCP/IP Model",
    sections: [
      {
        heading: "Application Layer",
        text: "Equivalent to OSI Layers 5–7. It includes protocols like HTTP, FTP, SMTP, DNS, and DHCP. It provides high-level APIs for network applications."
      },
      {
        heading: "Transport Layer",
        text: "Corresponds to OSI Layer 4. Provides end-to-end communication using TCP (reliable, connection-oriented) or UDP (unreliable, connectionless)."
      },
      {
        heading: "Internet Layer",
        text: "Equivalent to OSI Layer 3. It handles packet routing and addressing via IP. ICMP and ARP operate at this layer."
      },
      {
        heading: "Network Access Layer",
        text: "Covers OSI Layers 1 and 2. It defines how data is transmitted over physical media, including Ethernet, Wi-Fi, and PPP."
      }
    ]
  },
  "3": {
    title: "IP Addressing and Subnetting",
    sections: [
      {
        heading: "IPv4 Address Structure",
        text: "IPv4 addresses are written as four octets (e.g., 192.168.1.1). They have a network portion and a host portion, determined by the subnet mask."
      },
      {
        heading: "Subnetting",
        text: "Subnetting involves borrowing bits from the host portion to create subnets. It improves efficiency and reduces broadcast domains. CIDR notation (e.g., /24) defines the prefix length."
      },
      {
        heading: "IPv6",
        text: "IPv6 uses 128-bit addresses (8 groups of hex digits) to solve IPv4 exhaustion. It supports auto-configuration and eliminates NAT, with features like anycast and multicast."
      },
      {
        heading: "Public vs. Private Addresses",
        text: "Private IP ranges (e.g., 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are used within internal networks and are not routable on the public Internet."
      }
    ]
  },
  "4": {
    title: "Domain Name System (DNS)",
    sections: [
      {
        heading: "DNS Hierarchy",
        text: "Root servers (top-level) → Top-Level Domains (.com, .org) → Authoritative Name Servers for specific domains. Recursive and iterative queries resolve names."
      },
      {
        heading: "DNS Records",
        text: "A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail exchange), NS (name server), TXT (text). Each record type stores different information."
      },
      {
        heading: "DNS Resolution Process",
        text: "A client sends a query to a local resolver, which may query root servers, TLD servers, and authoritative servers. Caching reduces latency."
      },
      {
        heading: "DNSSEC",
        text: "DNS Security Extensions add cryptographic signatures to DNS data to prevent spoofing and man-in-the-middle attacks."
      }
    ]
  },
  "5": {
    title: "HTTP and HTTPS",
    sections: [
      {
        heading: "HTTP Methods",
        text: "GET (retrieve), POST (submit data), PUT (update), DELETE (remove), HEAD (metadata), OPTIONS (supported methods). Each has specific semantic meaning."
      },
      {
        heading: "HTTP Status Codes",
        text: "Informational (1xx), Success (2xx), Redirection (3xx), Client Error (4xx), Server Error (5xx). Common: 200 OK, 404 Not Found, 500 Internal Server Error."
      },
      {
        heading: "HTTPS and TLS/SSL",
        text: "HTTPS encrypts HTTP traffic using TLS (Transport Layer Security). It ensures confidentiality, integrity, and authentication via digital certificates."
      },
      {
        heading: "HTTP/2 and HTTP/3",
        text: "HTTP/2 introduces multiplexing and server push. HTTP/3 uses QUIC over UDP, reducing latency and improving performance."
      }
    ]
  },
  "6": {
    title: "TCP vs UDP",
    sections: [
      {
        heading: "TCP Features",
        text: "Connection-oriented, reliable, in-order delivery, flow control, congestion control, and error checking. Uses three-way handshake (SYN, SYN-ACK, ACK) to establish connection."
      },
      {
        heading: "UDP Features",
        text: "Connectionless, no reliability, no ordering, low overhead, fast. It adds only checksum error checking. Used for streaming, DNS, and DHCP."
      },
      {
        heading: "TCP vs UDP Comparison",
        text: "TCP is heavier, suitable for file transfers, emails, web browsing. UDP is lightweight, used for real-time applications (voice, video, gaming) where occasional loss is acceptable."
      },
      {
        heading: "TCP Header Fields",
        text: "Source port, destination port, sequence number, acknowledgment number, flags (SYN, ACK, FIN, RST), window size, checksum."
      },
      {
        heading: "UDP Header",
        text: "Source port, destination port, length, checksum. Minimal overhead, making it efficient."
      }
    ]
  },
  "7": {
    title: "Routing Algorithms",
    sections: [
      {
        heading: "RIP (Routing Information Protocol)",
        text: "A distance-vector protocol using hop count as metric (max 15). It uses Bellman-Ford algorithm and is simple but limited to small networks."
      },
      {
        heading: "OSPF (Open Shortest Path First)",
        text: "A link-state protocol that uses Dijkstra's algorithm. It scales well, supports VLSM, and converges quickly. It uses areas to reduce overhead."
      },
      {
        heading: "BGP (Border Gateway Protocol)",
        text: "The routing protocol of the Internet. It is a path-vector protocol that makes decisions based on path attributes (AS path, next-hop, local preference)."
      }
    ]
  },
  "8": {
    title: "Ethernet and MAC Addresses",
    sections: [
      {
        heading: "Ethernet Frame Structure",
        text: "Preamble, SFD, destination MAC, source MAC, EtherType/Length, payload, and FCS (Frame Check Sequence). The payload carries IP packets."
      },
      {
        heading: "MAC Addressing",
        text: "MAC addresses (e.g., 00:1A:2B:3C:4D:5E) are assigned by manufacturers. The first 24 bits are OUI (Organizationally Unique Identifier)."
      },
      {
        heading: "CSMA/CD and CSMA/CA",
        text: "Ethernet uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) for wired networks; Wi-Fi uses CSMA/CA (Collision Avoidance) for wireless."
      },
      {
        heading: "Switching",
        text: "Switches learn MAC addresses and forward frames based on destination MAC. They reduce collisions and segment networks."
      }
    ]
  },
  "9": {
    title: "Switching Techniques",
    sections: [
      {
        heading: "Circuit Switching",
        text: "A dedicated path is established between sender and receiver (like traditional phone networks). It guarantees bandwidth but is inefficient for bursty data."
      },
      {
        heading: "Packet Switching",
        text: "Data is divided into packets, each routed independently. It is connectionless (datagram) or connection-oriented (virtual circuit). Used in the Internet."
      },
      {
        heading: "Message Switching",
        text: "Entire messages are forwarded from one node to the next, stored until the next hop is available. Not common today; was used in store-and-forward networks."
      },
      {
        heading: "Virtual Circuit vs. Datagram",
        text: "Virtual circuit establishes a logical path before transmission (like ATM). Datagram packets are independent and take different routes (like IP)."
      }
    ]
  },
  "10": {
    title: "Network Security Basics",
    sections: [
      {
        heading: "Firewalls",
        text: "Firewalls filter traffic based on rules (packet filtering, stateful inspection, application-level). They can be hardware or software."
      },
      {
        heading: "VPNs (Virtual Private Networks)",
        text: "VPNs create secure tunnels over public networks using encryption (IPsec, SSL/TLS). They provide confidentiality and integrity for remote access."
      },
      {
        heading: "SSL/TLS",
        text: "TLS encrypts application-layer data. It uses asymmetric cryptography for handshake and symmetric encryption for data transfer."
      },
      {
        heading: "Attacks and Defenses",
        text: "Common attacks: DDoS, MITM, packet sniffing, spoofing. Defenses include encryption, authentication, intrusion prevention, and regular patching."
      }
    ]
  },
  "11": {
    title: "Network Layer Protocols",
    sections: [
      {
        heading: "ICMP (Internet Control Message Protocol)",
        text: "Used for error reporting and diagnostics (e.g., ping, traceroute). It carries messages like Echo Request/Reply, Destination Unreachable, Time Exceeded."
      },
      {
        heading: "ARP (Address Resolution Protocol)",
        text: "ARP maps IP addresses to MAC addresses within a local network. It broadcasts a request; the target replies with its MAC. ARP cache stores mappings."
      },
      {
        heading: "RARP (Reverse ARP)",
        text: "RARP maps MAC addresses to IP addresses, used by diskless workstations to discover their own IP. It has been largely replaced by BOOTP and DHCP."
      },
      {
        heading: "IP Forwarding",
        text: "When a packet arrives, the router checks its routing table to determine the next hop. It decrements TTL and recalculates checksum before forwarding."
      }
    ]
  },
  "12": {
    title: "Transport Layer Features",
    sections: [
      {
        heading: "Flow Control",
        text: "Flow control prevents a sender from overwhelming a receiver. TCP uses sliding windows; the receiver advertises a window size. Stop-and-wait and sliding window are two approaches."
      },
      {
        heading: "Congestion Control",
        text: "Congestion control manages network load to avoid congestion collapse. TCP uses algorithms: slow start, congestion avoidance, fast retransmit, fast recovery."
      },
      {
        heading: "Reliability in TCP",
        text: "TCP ensures reliable delivery via sequence numbers, acknowledgments (ACKs), and retransmissions. It uses cumulative ACKs and selective ACKs (SACK)."
      },
      {
        heading: "Connection Management",
        text: "TCP connection establishment (three-way handshake) and termination (four-way handshake). States: LISTEN, SYN-SENT, ESTABLISHED, CLOSE-WAIT, etc."
      }
    ]
  },
  "13": {
    title: "Application Layer Protocols",
    sections: [
      {
        heading: "FTP (File Transfer Protocol)",
        text: "Transfers files between client and server. Uses two connections: control (port 21) and data (port 20). Supports active and passive modes."
      },
      {
        heading: "SMTP (Simple Mail Transfer Protocol)",
        text: "Used for sending emails between servers. It uses port 25. SMTP is push protocol; POP3/IMAP are used for retrieval."
      },
      {
        heading: "DHCP (Dynamic Host Configuration Protocol)",
        text: "Automatically assigns IP addresses and network configuration to clients. Uses DORA (Discover, Offer, Request, Acknowledge) process."
      },
      {
        heading: "Telnet and SSH",
        text: "Telnet (port 23) is an unencrypted remote terminal protocol; SSH (port 22) provides secure encrypted remote access."
      },
      {
        heading: "SNMP (Simple Network Management Protocol)",
        text: "Used for monitoring and managing network devices. It uses MIBs (Management Information Bases) and has versions with security improvements."
      }
    ]
  },
  "14": {
    title: "Wireless Networking",
    sections: [
      {
        heading: "Wi-Fi Standards",
        text: "802.11a/b/g/n/ac/ax (Wi-Fi 6). They differ in frequency bands (2.4 GHz, 5 GHz, 6 GHz), data rates, and modulation techniques (OFDM, OFDMA)."
      },
      {
        heading: "Bluetooth",
        text: "Short-range (≈10 m) wireless technology for personal area networks. It uses master-slave piconets and supports speeds up to 2 Mbps (Classic) and 2 Mbps (BLE)."
      },
      {
        heading: "Cellular Networks",
        text: "Mobile networks (2G/GSM, 3G/UMTS, 4G/LTE, 5G) provide wide-area coverage. They use technologies like CDMA, OFDMA, and MIMO."
      },
      {
        heading: "Challenges in Wireless",
        text: "Interference, signal attenuation, security (encryption like WPA3), mobility management, and power consumption."
      }
    ]
  },
  "15": {
    title: "Network Address Translation (NAT)",
    sections: [
      {
        heading: "Static NAT",
        text: "One-to-one mapping between private and public IP. Used for hosting servers that need a fixed public address."
      },
      {
        heading: "Dynamic NAT",
        text: "Maps a private IP to a public IP from a pool. No fixed mapping; useful when many hosts need occasional internet access."
      },
      {
        heading: "PAT (Port Address Translation)",
        text: "Also called NAT overload. Multiple private IPs map to a single public IP using different source ports. This is common in home routers."
      },
      {
        heading: "NAT Traversal",
        text: "Protocols like STUN, TURN, and ICE help establish peer-to-peer connections through NATs, important for VoIP and gaming."
      }
    ]
  },
  "16": {
    title: "Quality of Service (QoS)",
    sections: [
      {
        heading: "QoS Mechanisms",
        text: "Classification, marking (DSCP, IP Precedence), policing, shaping, and congestion management (queuing algorithms like WFQ, CBWFQ)."
      },
      {
        heading: "Traffic Shaping vs. Policing",
        text: "Shaping buffers traffic to smooth bursts; policing drops or remarks traffic that exceeds a rate limit. Shaping is applied on output, policing on input."
      },
      {
        heading: "Queuing Algorithms",
        text: "FIFO (best effort), Priority Queuing (strict priority), Round Robin, Weighted Fair Queuing (WFQ), and Low Latency Queuing (LLQ) for real-time traffic."
      },
      {
        heading: "DiffServ and IntServ",
        text: "Integrated Services (IntServ) reserves resources per flow using RSVP. Differentiated Services (DiffServ) aggregates traffic classes and is more scalable."
      }
    ]
  },
  "17": {
    title: "Error Detection and Correction",
    sections: [
      {
        heading: "Checksum",
        text: "A simple checksum adds all bytes and negates the result. TCP and IP use 16-bit checksums to detect errors. It catches many but not all errors."
      },
      {
        heading: "CRC (Cyclic Redundancy Check)",
        text: "CRC uses polynomial division to produce a remainder appended to the frame. It is highly effective for detecting burst errors. Common CRC-32, CRC-16."
      },
      {
        heading: "Parity Bits",
        text: "Even or odd parity adds one bit to make the number of 1s even or odd. It detects single-bit errors but not multiple-bit errors."
      },
      {
        heading: "Forward Error Correction (FEC)",
        text: "FEC adds redundancy so that the receiver can correct errors without retransmission (e.g., Hamming codes, Reed-Solomon). Used in satellite and wireless."
      }
    ]
  }
};