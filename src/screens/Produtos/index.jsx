import Api from "../../service/api";
import React, { useEffect, useState } from "react";

export const Produtos = () => {

    const [produtos, setProduto] = useState([]);

    useEffect(() => {
        Api
          .get("/produto")
          .then((response) => setProduto(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
      
      return (<>{produtos.map((produto) => {return (<><h1>{produto.fotoLink}</h1> <img src={produto.fotoLink} alt="" /> </>) })}</>)

}