# Encryption and Signing Diagrams

## Diagram 1: Basic Encryption and Decryption

```mermaid
graph LR
    A[Sender] --> B{Encryption (Key)} --> C[Ciphertext]
    C --> D{Decryption (Key)} --> E[Receiver]
