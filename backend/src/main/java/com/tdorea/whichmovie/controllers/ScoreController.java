package com.tdorea.whichmovie.controllers;

import com.tdorea.whichmovie.dto.MovieDTO;
import com.tdorea.whichmovie.dto.ScoreDTO;
import com.tdorea.whichmovie.services.ScoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;
    
    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){
        MovieDTO moviedto = service.saveScore(dto);
        return moviedto;
    }
}
