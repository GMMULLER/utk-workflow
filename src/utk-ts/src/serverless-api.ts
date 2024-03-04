import { Environment } from './environment';
import { DataApi } from './data-api';

import { ILayerData, IMapGrammar, IPlotGrammar, IJoinedJson, IExternalJoinedJson } from './interfaces';
import { InteractionType } from './constants';

export abstract class ServerlessApi {

    static interactionCallbacks: any = {}; // {[knotId] -> callback} 

    static async setComponents(components: {id: string, json: IMapGrammar | IPlotGrammar}[]){
        DataApi.components = components;
    }

    static async setLayers(layers: ILayerData[]){
        DataApi.layers = layers;
    }

    static async setJoinedJsons(joinedJsons: IJoinedJson[] | IExternalJoinedJson[]){
        DataApi.joinedJsons = joinedJsons;
    }

    static addInteractionCallback = (knotId: string, callback: any) => {
        if(ServerlessApi.interactionCallbacks[knotId] == undefined){
            ServerlessApi.interactionCallbacks[knotId] = {}
        }
    
        ServerlessApi.interactionCallbacks[knotId] = callback;
    }
}
