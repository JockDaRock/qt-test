# MerakiDashboardApi.UpdateNetworkApplianceVpnSiteToSiteVpn

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub' | 
**hubs** | [**[NetworksnetworkIdappliancevpnsiteToSiteVpnHubs]**](NetworksnetworkIdappliancevpnsiteToSiteVpnHubs.md) | The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required. | [optional] 
**subnets** | [**[NetworksnetworkIdappliancevpnsiteToSiteVpnSubnets]**](NetworksnetworkIdappliancevpnsiteToSiteVpnSubnets.md) | The list of subnets and their VPN presence. | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `none` (value: `"none"`)

* `spoke` (value: `"spoke"`)

* `hub` (value: `"hub"`)




