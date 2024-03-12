package com.wbs.technical.graph.repository;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class GroupId implements Serializable {
    private Date d;
    private String team;
}