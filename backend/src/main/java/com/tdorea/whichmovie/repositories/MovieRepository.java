package com.tdorea.whichmovie.repositories;

import com.tdorea.whichmovie.entities.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    
}
