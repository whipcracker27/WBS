package com.wbs.technical.graph.repository;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class GraphId implements Serializable {
    private Date d;
    private String team;
    private String code;
}