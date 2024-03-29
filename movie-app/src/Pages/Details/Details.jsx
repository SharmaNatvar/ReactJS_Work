import React from "react";
import "./details.scss";
import DetailsBanner from "./DetailsBanner";
import useFetch from "../../Hook/useFetch";
import { useParams } from "react-router-dom";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </>
  );
};

export default Details;
