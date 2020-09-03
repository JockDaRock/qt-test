# MerakiDashboardApi.Body104

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** |     The traffic analysis mode for the network. Can be one of &#x27;disabled&#x27; (do not collect traffic types),     &#x27;basic&#x27; (collect generic traffic categories), or &#x27;detailed&#x27; (collect destination hostnames).  | [optional] 
**customPieChartItems** | [**[NetworksnetworkIdtrafficAnalysisCustomPieChartItems]**](NetworksnetworkIdtrafficAnalysisCustomPieChartItems.md) | The list of items that make up the custom pie chart for traffic reporting. | [optional] 

<a name="ModeEnum"></a>
## Enum: ModeEnum

* `disabled` (value: `"disabled"`)
* `basic` (value: `"basic"`)
* `detailed` (value: `"detailed"`)

