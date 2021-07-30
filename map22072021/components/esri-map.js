import React, { useRef, useEffect, useState } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import clasess from "./esri-map.module.css";
import { func } from "prop-types";

const layers = [
  {
    layerId: 1,
    layerName: "District",
    layerUrl:
      "http://dev.ksrsac.in/maps/rest/services/Boundaries/Admin_Dynamic/MapServer/1",
  },
  {
    layerId: 2,
    layerName: "Taluk",
    layerUrl:
      "http://dev.ksrsac.in/maps/rest/services/Boundaries/Admin_Dynamic/MapServer/2",
  },
];

function EsriMap() {
  const [loading, setLoading] = useState(false);
  const [mapLayer, setMapLayer] = useState(layers);
  const [mapLayerId, setMapLayerId] = useState(0);

  const mapDiv = useRef();

  const mapp = () => {
    const map = new ArcGISMap({
      basemap: "gray",
    });
    vieww(map);
  };

  const vieww = (map) => {
    const view = new MapView({
      map,
      container: mapDiv.current,
      extent: {
        spatialReference: {
          wkid: 102100,
        },
        xmax: 9318041.682582326,
        xmin: 7685897.199114412,
        ymax: 2134999.5715922136,
        ymin: 1257953.6118566156,
      },
      zoom: 7,
    });
  };

  const handleClick = (layerUrl) => {
    console.log("I am from handelclick " + layerUrl);
    const layer1 = new FeatureLayer({
      url: layerUrl,
    });
    map.add(layer1);
  };

  useEffect(() => {
    mapp();
  }, []);

  if (loading) {
    return (
      <>
        <section>Loading...</section>
      </>
    );
  }

  return (
    <>
      <div className={clasess.mainmapdiv} ref={mapDiv}></div>;
      <div>
        {mapLayer.map((lay) => {
          const { layerId, layerName, layerUrl } = lay;
          return (
            <label key={layerId}>
              <input type="checkbox" onClick={() => handleClick(layerUrl)} />
              // here onclick, what ever I get, I want to set to map.addlayer
              {layerName}
            </label>
          );
        })}
      </div>
    </>
  );
}
export default EsriMap;
