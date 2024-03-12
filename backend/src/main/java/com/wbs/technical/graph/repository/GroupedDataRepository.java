package com.wbs.technical.graph.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.wbs.technical.graph.model.GroupedData;


public interface GroupedDataRepository extends PagingAndSortingRepository<GroupedData, GraphId> {

    List<GroupedData> findAll();
}
