# Cryptographic Concepts Diagrams

## Diagram 1: Symmetric Encryption
```mermaid
graph LR
    A[Message] --> B[Key] --> C[HMAC Tag]
    A --> D[Sender]
    C --> D
    D --> E[Receiver]
    C --> E

```mermaid
graph LR
    A[Alice] -- Generate Public/Private Pair --> B{Public Key}
    C[Bob] -- Generate Public/Private Pair --> D{Public Key}
    B -- Exchange Public Keys --> E[Alice Receives Bob's Public Key]
    D -- Exchange Public Keys --> F[Bob Receives Alice's Public Key]
    E -- Compute Shared Secret with Private Key of Alice --> G[Shared Secret]
    F -- Compute Shared Secret with Private Key of Bob --> H[Shared Secret]
