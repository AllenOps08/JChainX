// Place this in resources/static/js/script.js
class BlockchainUI {
    constructor() {
        this.bindElements();
        this.bindEvents();
        this.loadChain();
    }

    bindElements() {
        this.newBlockInput = document.getElementById('newBlockData');
        this.blockchainContainer = document.getElementById('blockchain');
        this.loadingElement = document.getElementById('loading');
    }

    bindEvents() {
        document.getElementById('mineButton').addEventListener('click', () => this.mineBlock());
        document.getElementById('validateButton').addEventListener('click', () => this.validateChain());
        this.newBlockInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.mineBlock();
        });
    }

    showLoading() {
        this.loadingElement.style.display = 'block';
    }

    hideLoading() {
        this.loadingElement.style.display = 'none';
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger reflow
        toast.offsetHeight;

        // Show toast
        toast.classList.add('show');

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    async loadChain() {
        try {
            this.showLoading();
            const response = await fetch('/api/blockchain/chain');
            const chain = await response.json();
            this.renderChain(chain);
        } catch (error) {
            this.showToast('Failed to load blockchain', 'error');
            console.error('Error loading chain:', error);
        } finally {
            this.hideLoading();
        }
    }

    async mineBlock() {
        const data = this.newBlockInput.value.trim();
        if (!data) {
            this.showToast('Please enter data for the new block', 'error');
            return;
        }

        try {
            this.showLoading();
            const response = await fetch('/api/blockchain/mine', {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });

            if (!response.ok) throw new Error('Mining failed');

            this.newBlockInput.value = '';
            await this.loadChain();
            this.showToast('New block mined successfully!');
        } catch (error) {
            this.showToast('Failed to mine block', 'error');
            console.error('Error mining block:', error);
        } finally {
            this.hideLoading();
        }
    }

    async validateChain() {
        try {
            this.showLoading();
            const response = await fetch('/api/blockchain/validate');
            const isValid = await response.json();
            
            this.showToast(
                isValid ? 'Blockchain is valid!' : 'Blockchain is invalid!',
                isValid ? 'success' : 'error'
            );
        } catch (error) {
            this.showToast('Failed to validate blockchain', 'error');
            console.error('Error validating chain:', error);
        } finally {
            this.hideLoading();
        }
    }

    renderChain(chain) {
        this.blockchainContainer.innerHTML = chain.map((block, index) => `
            <div class="block">
                <div class="block-header">
                    <span class="block-title">Block #${index}</span>
                    <span class="block-timestamp">
                        ${new Date(block.timestamp * 1000).toLocaleString()}
                    </span>
                </div>
                <div class="block-content">
                    <span class="block-label">Hash:</span>
                    <span class="block-value">${block.hash}</span>
                    
                    <span class="block-label">Previous Hash:</span>
                    <span class="block-value">${block.previousHash}</span>
                    
                    <span class="block-label">Data:</span>
                    <span class="block-value">${block.data}</span>
                </div>
            </div>
        `).join('');
    }
}

// Initialize the UI when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlockchainUI();
});