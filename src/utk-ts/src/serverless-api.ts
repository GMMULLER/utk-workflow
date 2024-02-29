import { Environment } from './environment';
import { DataApi } from './data-api';

import { ILayerData, IMapGrammar, IPlotGrammar, IJoinedJson, IExternalJoinedJson } from './interfaces';

// export interface IJoinedJson {
//     joinedLayers: IJoinedLayer[]; // description of the joins with other layers
//     joinedObjects: IJoinedObjects[]; // description of the relation created with other layers
// }

export abstract class ServerlessApi {

    static async formatData(layers: ILayerData[], joinedJsons: IExternalJoinedJson[]){

        // console.log("geoJsons", geoJsons);
        
        
        
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
