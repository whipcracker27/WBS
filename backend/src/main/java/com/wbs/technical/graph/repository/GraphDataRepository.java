package com.wbs.technical.graph.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.wbs.technical.graph.model.GraphData;


public interface GraphDataRepository extends PagingAndSortingRepository<GraphData, GraphId> {

    List<GraphData> findAll();

    // @Query("SELECT gd FROM GraphData gd WHERE gd.code =?2 ORDER BY gd.d ASC")
    // List<GraphData> findDataSeriesByCode(String code);

    // @Query("SELECT gd FROM GraphData gd WHERE gd.team = ?1 and gd.code =?2 ORDER BY gd.d ASC")
    // List<GraphData> findDataSeriesByTeamAndCode(String team, String code);

    @Query("SELECT gd FROM GraphData gd " +
           "WHERE (:team IS NULL OR gd.team = :team) " +
           "AND (:code IS NULL OR gd.code = :code)")
    List<GraphData> find(@Param("team") String team, @Param("code") String code);

    @Query("SELECT DISTINCT(gd.team) team from GraphData gd")
    List<String> findTeams();

    @Query("SELECT DISTINCT(gd.code) code from GraphData gd")
    List<String> findCodes();

}
