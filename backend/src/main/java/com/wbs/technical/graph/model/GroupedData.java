package com.wbs.technical.graph.model;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wbs.technical.graph.repository.GroupId;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

@Data
@Entity
@IdClass(GroupId.class)
public class GroupedData {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Id private Date d;
    @Id private String team;
    private BigDecimal wacc;
    private BigDecimal co2_penalty;
    private BigDecimal e_cars_sales;
    private BigDecimal employee_engagement;
    private BigDecimal factory_utilization;
    private BigDecimal interest_coverage;
    private BigDecimal marketing_spend_rev;
    private BigDecimal scores;
}
