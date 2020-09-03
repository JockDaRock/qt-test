# MerakiDashboardApi.Body61

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of your floor plan. | [optional] 
**center** | [**NetworksnetworkIdfloorPlansfloorPlanIdCenter**](NetworksnetworkIdfloorPlansfloorPlanIdCenter.md) |  | [optional] 
**bottomLeftCorner** | [**NetworksnetworkIdfloorPlansBottomLeftCorner**](NetworksnetworkIdfloorPlansBottomLeftCorner.md) |  | [optional] 
**bottomRightCorner** | [**NetworksnetworkIdfloorPlansBottomRightCorner**](NetworksnetworkIdfloorPlansBottomRightCorner.md) |  | [optional] 
**topLeftCorner** | [**NetworksnetworkIdfloorPlansTopLeftCorner**](NetworksnetworkIdfloorPlansTopLeftCorner.md) |  | [optional] 
**topRightCorner** | [**NetworksnetworkIdfloorPlansTopRightCorner**](NetworksnetworkIdfloorPlansTopRightCorner.md) |  | [optional] 
**imageContents** | **Blob** | The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields (&#x27;center, &#x27;topLeftCorner&#x27;, etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image. | [optional] 
