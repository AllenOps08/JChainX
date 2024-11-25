# JChainX - Simple Blockchain Implementation

JChainX is a lightweight blockchain implementation built with Spring Boot and Java, featuring a modern web interface for interacting with the blockchain. This project serves as both an educational tool for understanding blockchain concepts and a foundation for building more complex blockchain applications.

## 🚀 Features

- Simple and efficient blockchain implementation
- Proof of Work (PoW) mining system
- RESTful API endpoints for blockchain operations
- Modern, responsive web interface
- Real-time chain validation
- Block mining with custom data
- Visual blockchain explorer

## 🛠️ Technical Stack

### Backend
- Java 11+
- Spring Boot 2.6.3
- SHA-256 hashing
- RESTful API architecture

### Frontend
- HTML5
- CSS3 with modern features
- Vanilla JavaScript (ES6+)
- Responsive Design

## 📋 Prerequisites

- Java JDK 11 or higher
- Maven 3.6+
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/AllenOps08/JChainX.git
cd JChainX
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
JChainX/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── blockchain/
│       │           ├── Application.java
│       │           ├── Block.java
│       │           ├── Blockchain.java
│       │           └── controller/
│       │               └── BlockchainController.java
│       └── resources/
│           ├── application.properties
│           └── static/
│               ├── css/
│               │   └── styles.css
│               ├── js/
│               │   └── script.js
│               └── index.html
├── pom.xml
└── README.md
```

## 🔌 API Endpoints

### Get Blockchain
```http
GET /api/blockchain/chain
```
Returns the entire blockchain.

### Mine Block
```http
POST /api/blockchain/mine
Content-Type: text/plain

<block-data>
```
Mines a new block with the provided data.

### Validate Chain
```http
GET /api/blockchain/validate
```
Validates the integrity of the blockchain.

## 💻 Usage

1. Access the web interface at `http://localhost:8080`
2. Use the input field to enter data for a new block
3. Click "Mine New Block" to add the block to the chain
4. Use "Validate Chain" to verify the blockchain's integrity
5. View the entire blockchain history in the visual explorer

## 🔒 Block Structure

Each block contains:
- Hash: SHA-256 hash of the block
- Previous Hash: Hash of the previous block
- Data: Custom data stored in the block
- Timestamp: Block creation time
- Nonce: Number used for mining (Proof of Work)

## 🛡️ Security Features

- SHA-256 hashing for block integrity
- Previous hash linking for chain security
- Proof of Work implementation
- Chain validation functionality

## 🔍 Proof of Work

The mining difficulty is set in the Blockchain constructor. The current implementation requires a specific number of leading zeros in the block hash, determined by the difficulty parameter.

Example:
```java
// Difficulty of 4 requires 4 leading zeros in hash
new Blockchain(4);
```

## 🚧 Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes
```bash
git commit -m 'Add some feature'
```
4. Push to the branch
```bash
git push origin feature/YourFeature
```
5. Create a Pull Request

## ⚠️ Limitations

- This is a simplified blockchain implementation
- Not suitable for production use without additional security measures
- Single node implementation (no network consensus)
- In-memory storage (no persistence)

## 🔜 Future Improvements

- [ ] Persistent storage implementation
- [ ] Network node communication
- [ ] Consensus mechanism
- [ ] Transaction pool
- [ ] Digital signatures
- [ ] Enhanced security features
- [ ] Block explorer improvements
- [ ] Performance optimizations

