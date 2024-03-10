package com.wbs.technical.graph.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.wbs.technical.graph.model.GraphData;


public interface GraphDataRepository extends PagingAndSortingRepository<GraphData, GraphId> {

    List<GraphData> findAll();
}
