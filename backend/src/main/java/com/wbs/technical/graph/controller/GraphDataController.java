package com.wbs.technical.graph.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wbs.technical.graph.model.GraphData;
import com.wbs.technical.graph.repository.GraphDataRepository;

@RestController
@RequestMapping("/api/graph")

public class GraphDataController {

    @Autowired
    private GraphDataRepository graphRepository;

    @GetMapping
    public List<GraphData> getAllEventData() {
        return graphRepository.findAll();
    }
}
