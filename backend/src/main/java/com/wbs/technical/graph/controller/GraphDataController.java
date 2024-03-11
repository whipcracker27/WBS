package com.wbs.technical.graph.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wbs.technical.graph.model.GraphData;
import com.wbs.technical.graph.repository.GraphDataRepository;

@RestController
@RequestMapping("/api/graph")

public class GraphDataController {

    @Autowired
    private GraphDataRepository graphRepository;

    @CrossOrigin
    @GetMapping
    public List<GraphData> getAllEventData() {
        return graphRepository.findAll();
    }

    @CrossOrigin
    @GetMapping(value="/paged", params = { "page", "size" })
    public List<GraphData> getPageEventData(@RequestParam("page") int page, @RequestParam("size") int size) {
        Pageable secondPageWithFiveElements = PageRequest.of(page, size);
        return graphRepository.findAll(secondPageWithFiveElements).getContent();
    }
}
