# MerakiDashboardApi.Body109

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scanningEnabled** | **Boolean** | Whether APs will scan for Bluetooth enabled clients. (true, false) | [optional] 
**advertisingEnabled** | **Boolean** | Whether APs will advertise beacons. (true, false) | [optional] 
**uuid** | **String** | The UUID to be used in the beacon identifier. | [optional] 
**majorMinorAssignmentMode** | **String** | The way major and minor number should be assigned to nodes in the network. (&#x27;Unique&#x27;, &#x27;Non-unique&#x27;) | [optional] 
**major** | **Number** | The major number to be used in the beacon identifier. Only valid in &#x27;Non-unique&#x27; mode. | [optional] 
**minor** | **Number** | The minor number to be used in the beacon identifier. Only valid in &#x27;Non-unique&#x27; mode. | [optional] 

<a name="MajorMinorAssignmentModeEnum"></a>
## Enum: MajorMinorAssignmentModeEnum

* `Unique` (value: `"Unique"`)
* `Non-unique` (value: `"Non-unique"`)

