# MerakiDashboardApi.Body96

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A friendly name or description for the interface or VLAN. | 
**subnet** | **String** | The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24). | 
**interfaceIp** | **String** | The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch&#x27;s management IP. | 
**multicastRouting** | **String** | Enable multicast support if, multicast routing between VLANs is required. Options are, &#x27;disabled&#x27;, &#x27;enabled&#x27; or &#x27;IGMP snooping querier&#x27;. Default is &#x27;disabled&#x27;. | [optional] 
**vlanId** | **Number** | The VLAN this routed interface is on. VLAN must be between 1 and 4094. | 
**defaultGateway** | **String** | The next hop for any traffic that isn&#x27;t going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface. | [optional] 
**ospfSettings** | [**DevicesserialswitchroutinginterfacesOspfSettings**](DevicesserialswitchroutinginterfacesOspfSettings.md) |  | [optional] 

<a name="MulticastRoutingEnum"></a>
## Enum: MulticastRoutingEnum

* `disabled` (value: `"disabled"`)
* `enabled` (value: `"enabled"`)
* `IGMP snooping querier` (value: `"IGMP snooping querier"`)

