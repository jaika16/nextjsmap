import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const CreateMapView = () => {
  const map = new ArcGISMap({
    basemap: "gray-vector",
  });

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
  });
};

export default CreateMapView;
