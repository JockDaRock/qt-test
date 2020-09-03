# MerakiDashboardApi.Body31

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | The status of the port | [optional] 
**dropUntaggedTraffic** | **Boolean** | Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true. | [optional] 
**type** | **String** | The type of the port: &#x27;access&#x27; or &#x27;trunk&#x27;. | [optional] 
**vlan** | **Number** | Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. | [optional] 
**allowedVlans** | **String** | Comma-delimited list of the VLAN ID&#x27;s allowed on the port, or &#x27;all&#x27; to permit all VLAN&#x27;s on the port. | [optional] 
**accessPolicy** | **String** | The name of the policy. Only applicable to Access ports. Valid values are: &#x27;open&#x27;, &#x27;8021x-radius&#x27;, &#x27;mac-radius&#x27;, &#x27;hybris-radius&#x27; for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, &#x27;open&#x27; is the only valid value and &#x27;open&#x27; is the default value if the field is missing. | [optional] 
