package com.wbs.technical.graph.model;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class GraphData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Date d;
    private String team;
    private String code;
    private BigDecimal v;

}