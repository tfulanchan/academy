# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 1: Symmetric Encryption
    A[Plaintext] -->|Encrypt| B[Symmetric Key] --> C[Ciphertext]
    C -->|Decrypt| D[Plaintext]

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 2: Asymmetric Encryption
    A2[Plaintext] -->|Encrypt with Public Key| B2[Public Key] --> C2[Ciphertext]
    C2 -->|Decrypt with Private Key| D2[Private Key] --> E2[Plaintext]

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 3: Digital Signature
    A3[Message] -->|Hash| B3[Hash Function] --> C3[Hash Value]
    C3 -->|Sign with Private Key| D3[Private Key] --> E3[Digital Signature]
    E3 -->|Verify with Public Key| F3[Public Key] --> G3[Verification Result]

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 4: Hash Function
    A4[Input Data] -->|Hash Function| B4[Hash Value]

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 5: MAC (Message Authentication Code)
    A5[Message] --> B5[Key] --> C5[MAC Tag]
    A5 --> D5[Sender]
    C5 --> D5
    D5 --> E5[Receiver]
    C5 --> E5

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 6: HMAC (Hash-based Message Authentication Code)
    A6[Message] --> B6[Key] --> C6[HMAC Tag]
    A6 --> D6[Sender]
    C6 --> D6
    D6 --> E6[Receiver]
    C6 --> E6

# Cryptographic Concepts Diagrams

```mermaid
graph LR
    %% Diagram 7: Diffie-Hellman Key Exchange
    A7[Alice] -- Generate Public/Private Pair --> B7{Public Key}
    C7[Bob] -- Generate Public/Private Pair --> D7{Public Key}
    B7 -- Exchange Public Keys --> E7[Alice Receives Bob's Public Key]
    D7 -- Exchange Public Keys --> F7[Bob Receives Alice's Public Key]
    E7 -- Compute Shared Secret with Private Key of Alice --> G7[Shared Secret]
    F7 -- Compute Shared Secret with Private Key of Bob --> H7[Shared Secret]
