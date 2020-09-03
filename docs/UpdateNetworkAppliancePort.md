# MerakiDashboardApi.UpdateNetworkAppliancePort

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | The status of the port | [optional] 
**dropUntaggedTraffic** | **Boolean** | Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true. | [optional] 
**type** | **String** | The type of the port: 'access' or 'trunk'. | [optional] 
**vlan** | **Number** | Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. | [optional] 
**allowedVlans** | **String** | Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port. | [optional] 
**accessPolicy** | **String** | The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing. | [optional] 


