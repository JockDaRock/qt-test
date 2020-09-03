# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of this applicationCategory or application type traffic filter. E.g.: \&quot;meraki:layer7/category/1\&quot;, \&quot;meraki:layer7/application/4\&quot; | [optional] 
**protocol** | **String** | Protocol of this custom type traffic filter. Must be one of: &#x27;tcp&#x27;, &#x27;udp&#x27;, &#x27;icmp&#x27; or &#x27;any&#x27; | [optional] 
**source** | [**NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source.md) |  | [optional] 
**destination** | [**NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination.md) |  | [optional] 

<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum

* `tcp` (value: `"tcp"`)
* `udp` (value: `"udp"`)
* `icmp` (value: `"icmp"`)
* `any` (value: `"any"`)

