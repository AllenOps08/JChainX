package com.blockchain.controller;

import org.springframework.web.bind.annotation.*;
import com.blockchain.*;
import java.util.List;

@RestController
@RequestMapping("/api/blockchain")
public class BlockchainController {
    private final Blockchain blockchain = new Blockchain(4);

    @GetMapping("/chain")
    public List<Block> getChain() {
        return blockchain.getChain();
    }

    @PostMapping("/mine")
    public Block addBlock(@RequestBody String data) {
        blockchain.addBlock(data);
        return blockchain.getChain().get(blockchain.getChain().size() - 1);
    }

    @GetMapping("/validate")
    public boolean validateChain() {
        return blockchain.isChainValid();
    }
}