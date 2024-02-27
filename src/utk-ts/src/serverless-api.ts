import { Environment } from './environment';
import { DataApi } from './data-api';

import { ICameraData, ILayerFeature, ILayerData, IMapStyle, IMasterGrammar, IMapGrammar, IPlotGrammar, IJoinedJson } from './interfaces';

export abstract class ServerlessApi {

    static async processGeoDataFrames(geoDataframes: string[]){

        

        // TODO: parse geoDataFrames
        // TODO: extract layers
        // TODO: setLayers
        // TODO: extract joins
        // TODO: setJoined
    }

    static async setComponents(components: {id: string, json: IMapGrammar | IPlotGrammar}[]){
        DataApi.components = components;
    }

    static async setLayers(layers: ILayerData[]){
        DataApi.layers = layers;
    }

    static async setJoinedJsons(joinedJsons: {id: string, json: IJoinedJson}[]){
        DataApi.joinedJsons = joinedJsons;
    }

}
