import React from "react";
import learn from "../../assets/Skill/learn.svg";
import django from "../../assets/Skill/framework/django.svg";
import express from "../../assets/Skill/framework/express.svg";
import qt from "../../assets/Skill/framework/qt.svg";
import react from "../../assets/Skill/framework/react.svg";
import mongo from "../../assets/Skill/database/mongo.svg";
import mysql from "../../assets/Skill/database/mysql.svg";
import sqlite from "../../assets/Skill/database/sqlite.svg";
import cpp from "../../assets/Skill/programming/cpp.svg";
import css from "../../assets/Skill/programming/css.svg";
import html from "../../assets/Skill/programming/html.svg";
import js from "../../assets/Skill/programming/js.svg";
import node from "../../assets/Skill/programming/node.svg";
import python from "../../assets/Skill/programming/python.svg";
import bash from "../../assets/Skill/tools/bash.svg";
import docker from "../../assets/Skill/tools/docker.svg";
import figma from "../../assets/Skill/tools/figma.svg";
import git from "../../assets/Skill/tools/git.svg";
import vscode from "../../assets/Skill/tools/vscode.svg";
import webpack from "../../assets/Skill/tools/webpack.svg";
import styled from "styled-components";

const ImageCompetence = styled.img`
  width: 75px;
  height: 75px;
`;

const ContainAll = styled.main`
  position: absolute;
  top: 230px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FrameworkDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
`;

const DatabaseDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
`;

const ProgrammingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
  width: 50%;
`;

const ToolsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
`;

const DisplayCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TitleContent = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 40px;
`;

const Section = styled.section`
  width: 100%;
  &:nth-child(1) {
    display: flex;
    justify-content: center;
    margin-bottom: 105px;
  }
`;

const ImageTop = styled.img`
  width: 389px;
  height: 247px;
  display: inline;
`;

const ContentCompetence = () => {
  return (
    <ContainAll>
      <Section>
        <div className="sdf">
          <TitleContent>Mes compétences</TitleContent>
          <ImageTop src={learn} alt="" />
        </div>
      </Section>
      <Section>
        <TitleContent>Langage de programmation</TitleContent>
        <DisplayCenter>
          <ProgrammingDiv>
            <ImageCompetence src={cpp} />
            <ImageCompetence src={css} />
            <ImageCompetence src={html} />
            <ImageCompetence src={js} />
            <ImageCompetence src={node} />
            <ImageCompetence src={python} />
          </ProgrammingDiv>
        </DisplayCenter>
      </Section>
      <Section>
        <TitleContent>Framework</TitleContent>
        <DisplayCenter>
          <FrameworkDiv>
            <ImageCompetence src={django} />
            <ImageCompetence src={express} />
            <ImageCompetence src={qt} />
            <ImageCompetence src={react} />
          </FrameworkDiv>
        </DisplayCenter>
      </Section>
      <Section>
        <TitleContent>Database</TitleContent>
        <DisplayCenter>
          <DatabaseDiv>
            <ImageCompetence src={mongo} />
            <ImageCompetence src={mysql} />
            <ImageCompetence src={sqlite} />
          </DatabaseDiv>
        </DisplayCenter>
      </Section>
      <Section>
        <TitleContent>Outils de production</TitleContent>
        <DisplayCenter>
          <ToolsDiv>
            <ImageCompetence src={bash} />
            <ImageCompetence src={docker} />
            <ImageCompetence src={figma} />
            <ImageCompetence src={git} />
            <ImageCompetence src={vscode} />
            <ImageCompetence src={webpack} />
          </ToolsDiv>
        </DisplayCenter>
      </Section>
    </ContainAll>
  );
};

export default ContentCompetence;
