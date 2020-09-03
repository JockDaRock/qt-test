# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of this applicationCategory or application type traffic filter. E.g.: \"meraki:layer7/category/1\", \"meraki:layer7/application/4\" | [optional] 
**protocol** | **String** | Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp' or 'any' | [optional] 
**source** | [**NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source.md) |  | [optional] 
**destination** | [**NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination.md) |  | [optional] 


<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `icmp` (value: `"icmp"`)

* `any` (value: `"any"`)




