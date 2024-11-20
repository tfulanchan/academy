# Encryption and Signing Diagrams

## Diagram 1: Basic Encryption and Decryption
```mermaid
graph LR
    A[Sender] --> B{Encryption (Key)} --> C[Ciphertext]
    C --> D{Decryption (Key)} --> E[Receiver]

graph LR
    A[Sender] --> B{Encryption (Public Key)} --> C[Ciphertext]
    C --> D{Decryption (Private Key)} --> E[Receiver]
    A --> F[Key Generation] --> G{Public Key}
    F --> H{Private Key}
    G --> B
    H --> D

graph LR
    A[Sender] --> B{Signing (Private Key)} --> C[Signed Message]
    C --> D{Verification (Public Key)} --> E[Receiver]
    A --> F[Key Generation] --> G{Public Key}
    F --> H{Private Key}
    G --> D
    H --> B

graph LR
    A[Message] --> B{Hash Function} --> C[Hash Value]

graph LR
    A[Message] --> B{MAC Function (Key)} --> C[MAC Tag]
    A --> D[Sender]
    C --> D
    D --> E[Receiver]
    C --> E


graph LR
    A[Message] --> B{Hash Function} --> C[Hash Value]
    A --> D{MAC Function (Key)} --> E[MAC Tag]
    C --> D
    D --> F[Sender]
    C --> F
    E --> F
    F --> G[Receiver]
