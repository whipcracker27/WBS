package com.wbs.technical.graph.model;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wbs.technical.graph.repository.GraphId;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

@Data
@Entity
@IdClass(GraphId.class)
public class GraphData {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Id private Date d;
    @Id private String team;
    @Id private String code;
    private BigDecimal v;
}
