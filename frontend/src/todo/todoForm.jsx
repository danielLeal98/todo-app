import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => (
  <div role="form" className="todoForm">
    {/*Tamanhos em Celular - Small - Medium JSX */}
    {/*<div className="col-xs-12 col-sm-9 col-md-10">*/}
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Adicione uma Tarefa"
        onChange={props.handleChange}
        value={props.description}
      ></input>
    </Grid>
    {/*</div>*/}
    <Grid cols="12 3 2">
      <IconButton
        style="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></IconButton>
    </Grid>
  </div>
);
