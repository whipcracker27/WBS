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

import com.wbs.technical.graph.model.GroupedData;
import com.wbs.technical.graph.repository.GroupedDataRepository;

@RestController
@RequestMapping("/api/graph/grouped")

public class GroupedDataController {

    @Autowired
    private GroupedDataRepository groupedRepository;

    @CrossOrigin
    @GetMapping
    public List<GroupedData> getAllGrouped() {
        return groupedRepository.findAll();
    }
}
