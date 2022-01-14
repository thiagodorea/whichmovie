package com.tdorea.whichmovie.repositories;

import com.tdorea.whichmovie.entities.Score;
import com.tdorea.whichmovie.entities.ScorePK;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
    
}
