import * as azmaps from 'azure-maps-control';
import * as mb from 'mapbox-gl';

declare namespace atlas {

    /** A class that converts Mapbox styles into native Azure Maps classes and imports them into an Azure Maps instance. */
    export class MapboxStyleImporter {
        /**
         * A class that converts Mapbox styles into native Azure Maps classes and imports them into an Azure Maps instance.
         * @param map Map to add styles to.
         */
        constructor(map: azmaps.Map);

        /**
         * Extracts Mapbox light, source, and layer styles, converts them to Azure Maps comparable values, and applies it to the map.
         * @param mapboxStyle Mapbox style to add to the map.
         */
        public addStyle(mapboxStyle: mb.Style): void;

        /**
         * Converts a Mapbox style source to an Azure Map source and adds it to a map.
         * @param mapboxSource Mapbox source to add to map.
         */
        public addSource(id: string, mapboxSource: mb.Source): void;

        /**
         * Converts a Mapbox style layer to an Azure Map layer and adds it to a map.
         * @param mapboxLayer Mapbox layer to add to map.
     * @param beforeLayer The ID of a layer to add this layer before.
         */
        public addLayer(mapboxLayer: mb.Layer, beforeLayer?: string): void;
    }
}

export = atlas;