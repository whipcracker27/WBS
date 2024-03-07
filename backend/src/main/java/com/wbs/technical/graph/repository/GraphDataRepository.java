package com.wbs.technical.graph.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wbs.technical.graph.model.GraphData;

public interface GraphDataRepository extends JpaRepository<GraphData, GraphId> {
}
