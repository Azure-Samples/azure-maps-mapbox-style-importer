---
page_type: sample
description: An Azure Maps Web SDK module that takes a Mapbox style object and converts it into native Azure Maps classes and adds it to a map instance.
languages:
- javascript
- typescript
products:
- azure
- azure-maps
---

# Azure Maps Mapbox Style Importer module

An Azure Maps Web SDK module that takes a Mapbox style object and converts it into native Azure Maps classes and adds it to a map instance. Extracts Mapbox light, source, and layer styles, converts them to Azure Maps comparable values, and applies it to the map.

## Getting started

Download the project and copy the `azure-maps-mapbox-style-importer` JavaScript file from the `dist` folder into your project.

**Usage**

```JavaScript
//Initialize a map instance.
var map = new atlas.Map('myMap', {
    //Add your auth options
});

//Wait until the map resources are ready.
map.events.add('ready', function () {

    //Create an instance of the mapbox style importer.
    var importer = atlas.MapboxStyleImporter(map);   

    //Import a single source.
    //(id: string, data: string | GeoJSON object)
    importer.addSource('my-source', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
            {
                'type': 'Feature',
                'properties': {
                    'color': 'red'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [0, 0]
                }
            }
        }
    });

    //Import a single later.
    importer.addLayer({
        'id': 'my-circle-layer',
        'type': 'circle',
        'source': 'my-source',
        'paint': {
            'circle-color': ['get', 'color']
        }
    });

    //Import in a style that includes multiple sources and layers.
    importer.addStyle({
        sources: {    
            'my-source-1': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [100, 0]
                        }
                    }
                }
            },
            'my-source-2': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-100, 0]
                        }
                    }
                }
            }
        },
        layers: [{
            'id': 'my-circle-layer-1',
            'type': 'circle',
            'source': 'my-source-1',
            'paint': {
                'circle-color': 'purple'
            }
        },
        {
            'id': 'my-circle-layer-2',
            'type': 'circle',
            'source': 'my-source-2',
            'paint': {
                'circle-color': 'blue'
            }
        }]
    });
});
```

## API Reference

### MapboxStyleImporter class

Namespace: `atlas`

A class that converts Mapbox styles into native Azure Maps classes and imports them into an Azure Maps instance.

**Contstructor**

> `MapboxStyleImporter(map: atlas.Map)`

**Methods** 

| Name | Return type | Description |
|------|-------------|-------------|
| `addStyle(mapboxStyle: any)` | | Extracts Mapbox light, source, and layer styles, converts them to Azure Maps comparable values, and applies it to the map. |
| `addSource(id: string, mapboxSource: any)` | | Converts a Mapbox style source to an Azure Map source and adds it to a map. |
| `addLayer(mapboxLayer: any, beforeLayer?: string)` | | Converts a Mapbox style layer to an Azure Map layer and adds it to a map. |

## Related Projects

* [Azure Maps Web SDK Open modules](https://github.com/microsoft/Maps/blob/master/AzureMaps.md#open-web-sdk-modules) - A collection of open source modules that extend the Azure Maps Web SDK.
* [Azure Maps Web SDK Samples](https://github.com/Azure-Samples/AzureMapsCodeSamples)
* [Azure Maps Gov Cloud Web SDK Samples](https://github.com/Azure-Samples/AzureMapsGovCloudCodeSamples)
* [Azure Maps & Azure Active Directory Samples](https://github.com/Azure-Samples/Azure-Maps-AzureAD-Samples)
* [List of open-source Azure Maps projects](https://github.com/microsoft/Maps/blob/master/AzureMaps.md)

## Additional Resources

* [Azure Maps (main site)](https://azure.com/maps)
* [Azure Maps Documentation](https://docs.microsoft.com/azure/azure-maps/index)
* [Azure Maps Blog](https://azure.microsoft.com/blog/topics/azure-maps/)
* [Microsoft Q&A](https://docs.microsoft.com/answers/topics/azure-maps.html)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

## Contributing

We welcome contributions. Feel free to submit code samples, file issues and pull requests on the repo and we'll address them as we can. 
Learn more about how you can help on our [Contribution Rules & Guidelines](https://github.com/Azure-Samples/azure-maps-mapbox-style-importer/blob/main/CONTRIBUTING.md). 

You can reach out to us anytime with questions and suggestions using our communities below:
* [Microsoft Q&A](https://docs.microsoft.com/answers/topics/azure-maps.html)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). 
For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or 
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

MIT
 
See [License](https://github.com/Azure-Samples/azure-maps-mapbox-style-importer/blob/main/LICENSE.md) for full license text.