# from shadowAccumulator import *
from .load_utk import *
from .utils import *
from .load_physical import *
from .load_thematic import *

try:
    # Avoid importing it in systems without optix
    from .shadow_accumulator import *
except:
    import warnings
    warnings.warn("Skipping shadow_accumulator import.")

# exposes simulations like .shadow
# loads any kind of data the type is determined by the extension
def shadow(data, intervals):

    coordinates = []

    for value in data:

        layer_json = {}

        if(type(value) == str): # it is a filepath
            layer_json = load_utk(value)
        else:
            layer_json = value

        coordinates += get_coordinates(layer_json)

    latitudes = []
    longitudes = []

    for i in range(int(len(coordinates)/3)):
        
        latitudes.append(coordinates[i*3])
        longitudes.append(coordinates[i*3+1])

    centroid = convert_projections('3395', '4326', [(min(longitudes) + max(longitudes))/2, (min(latitudes) + max(latitudes))/2])

    shadowAccumulator = ShadowAccumulator(centroid[1], centroid[0], data, intervals)
    shadowAccumulator.accumulate_shadow()

    return shadowAccumulator