# MerakiDashboardApi.UpdateNetworkWirelessBluetoothSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scanningEnabled** | **Boolean** | Whether APs will scan for Bluetooth enabled clients. (true, false) | [optional] 
**advertisingEnabled** | **Boolean** | Whether APs will advertise beacons. (true, false) | [optional] 
**uuid** | **String** | The UUID to be used in the beacon identifier. | [optional] 
**majorMinorAssignmentMode** | **String** | The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') | [optional] 
**major** | **Number** | The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. | [optional] 
**minor** | **Number** | The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. | [optional] 


<a name="MajorMinorAssignmentModeEnum"></a>
## Enum: MajorMinorAssignmentModeEnum


* `unique` (value: `"Unique"`)

* `nonUnique` (value: `"Non-unique"`)




