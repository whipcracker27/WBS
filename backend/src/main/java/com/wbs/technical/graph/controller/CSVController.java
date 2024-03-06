package com.wbs.technical.graph.controller;


import java.io.IOException;
import java.nio.file.Files;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CSVController {

    @GetMapping("/download/graph.csv")
    public ResponseEntity<byte[]> downloadCsv() throws IOException {
        Resource resource = new ClassPathResource("data.csv");
        byte[] csvData = Files.readAllBytes(resource.getFile().toPath());

        return ResponseEntity
                .ok()
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csvData);
    }
}