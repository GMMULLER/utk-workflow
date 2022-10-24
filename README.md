# Getting Started with this project

1. Install dependencies (TODO)

1. Clone the repository, initialize submodule and pull submodule

`git clone --recurse-submodule https://github.com/urban-toolkit/urbantk-react-ts.git`

2. Copy remote branch (v1.0 - most recent till now) to a local branch

   - go to urbantk-react-ts/src/urbantk-map/
   - copy remote v1.0 branch to a local git branch
   - got to ts folder
   - run `npm install`
   - run `npm run build`

3. Frontend configuration
   - go back to urbantk-react-ts folder
   - run `npm install`
   - to see web version `npm run start:web`
   - to see the VR version `npm run start:vr`
   - to see the CAVE2 version `npm run start:cave`

### Configuration

All important configuration parameters are situated in src/params.js.  

### Info

Web runs on the 3000 port. VR and CAVE2 runs in the 3001 port.  

### Available start options

- "start:web": Starts the web version
- "build:web": Builds the bundle for web version (broken)
- "start:vr": Starts the VR version
- "build:vr": Builds the bundle for the VR version (broken)
- "start:cave": Starts the CAVE2 version
- "start:cave:local": Starts the CAVE2 version locally (for testing purposes) (not implemented)
- "build": Build web version and bundle (broken)
- "build:bundle": Build webpack bundle
- "test": Run tests (not implemented)

### About the data

The data used in the stages is served through the public folder.  

If one wants to change which data is being loaded the paramsMapView.environmentDataFolder has to be changed inside src/params.js  

Obs: Currently it is only possible to load public/data/example_mesh_nyc, because it is the only example that uses the projection 3395 instead of lat/lng.

### To load project into the CAVE2

### TODO

- Merge build loading with the other layers (change projection to 3395)

- Give support to fixed resolution in urbantk-map (for CAVE2)
- Initialize all dependent servers with `npm run start:cave`
- Finalize the start:vr:local (for local testing purposes)
- Fix dependency issues with urbantk-react
- Fix coastline mesh loading (dataLoading)
- Unify node dependancies
- Change repository name, delete all other branches except master, delete all other repositories except `urbantk-map` and `urbantk-react`
- Add CAVE2 Unity side as a sub-module
- Clean code
- Clean big files of repo
- Make shaders pretty [link](https://www.kpf.com/about/innovation)
- Dont try to connect to unity or order server when the web server is executed
- Prevent the need of starting web server 
- Make the data be loaded from UrbanComponnent communication with Jupyter not from what I choose in MapView
- Fix appBuildingOptions in config/path.js

- Because of a package used in urban-tk some rules from typescript were disabled (in order to build urbantk-react). The best solution is to enable them again and use the source code of the library as a sub-module. They were disabled by inserting comments in the file.Disabled rules:
   - @typescript-eslint/no-empty-function
      - /* eslint-disable @typescript-eslint/no-empty-function */
   - no-cond-assign
      - /* eslint-disable no-cond-assign */
   - require-yield
      - /* eslint-disable require-yield */

### Package List

1. react-bootstrap - https://www.npmjs.com/package/react-bootstrap
2. react-draggable - https://www.npmjs.com/package/react-draggable
3. d3 - https://www.npmjs.com/package/d3
4. @types/d3 - https://www.npmjs.com/package/@types/d3
5. react-icons - https://www.npmjs.com/package/react-icons
6. jquery - https://www.npmjs.com/package/jquery
7. @types/jquery - https://www.npmjs.com/package/@types/jquery
8. react-dropdown - https://www.npmjs.com/package/react-dropdown
9. @types/d3-scale - https://www.npmjs.com/package/@types/d3-scale
10. axios - https://www.npmjs.com/package/axios

## creating submodule
git submodule add link_to_the_repository_to_be_added_as_submodule

### submodule cloning
1. clone the repository as usual
2. run - git submodule init
3. run - git submodule update

### to fetch and update submodule
git submodule update --remote submoduleName


### multiple entry points 
https://stackoverflow.com/questions/55308657/create-react-app-v2-multiple-entry-points
https://medium.com/swlh/how-to-add-multiple-entry-points-to-your-react-app-ea8bc015d410

## jupyter bundle creation

<!-- 1. get the urbantkmap.iife.js from urbantk repository as this is used
previously in jupyter notebook
2. remove var urbantkmap = (function (exports)){ //possible line 2
3. remove last line
4. remove all exports. lines
5. finally remove "return exports"
6. add at the end "export {MapView}
7. MapView Component Added necessary code - see comments
8. index.tsx = entry point for jupyter notebook
9. Jupyter.tsx = App.tsx for jupyter notebook -->

1. Go to src/urbantk-map/ts
2. run `npm run build`
3. Paste in the header of src/urbantk-map/ts/dist/urbantkmap.js:  
   /* eslint-disable @typescript-eslint/no-empty-function */  
   /* eslint-disable no-cond-assign */  
   /* eslint-disable require-yield */  
3. In terminal urbantk-react/ run `npm run build:bundle:jupyter`
    it will create a single bundle file in /dist/bundle folder - "bundle.min.js"
    this bundle can be used to render our project in jupyter notebook
4. Go to src/pythonComponents/jupyterSupport run `jupyter notebook`
5. Run the notebook that will open on the web browser

<!-- ========================== -->

2. in terminal run "npm run build:bundle:web"
    it will create a single bundle file in dist/bundle folder that can be used with basic html file
    make sure to run the server in port 3000
    make sure to add the data folder with data