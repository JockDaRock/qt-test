# MerakiDashboardApi.UpdateNetworkTrafficAnalysis

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** |     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),     'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames).  | [optional] 
**customPieChartItems** | [**[NetworksnetworkIdtrafficAnalysisCustomPieChartItems]**](NetworksnetworkIdtrafficAnalysisCustomPieChartItems.md) | The list of items that make up the custom pie chart for traffic reporting. | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `disabled` (value: `"disabled"`)

* `basic` (value: `"basic"`)

* `detailed` (value: `"detailed"`)




