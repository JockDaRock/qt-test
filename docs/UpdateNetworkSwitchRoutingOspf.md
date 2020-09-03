# MerakiDashboardApi.UpdateNetworkSwitchRoutingOspf

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default. | [optional] 
**helloTimerInSeconds** | **Number** | Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds | [optional] 
**deadTimerInSeconds** | **Number** | Time interval to determine when the peer will be declare inactive/dead. Value must be between 1 and 65535 | [optional] 
**areas** | [**[NetworksnetworkIdswitchroutingospfAreas]**](NetworksnetworkIdswitchroutingospfAreas.md) | OSPF areas | [optional] 
**md5AuthenticationEnabled** | **Boolean** | Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default. | [optional] 
**md5AuthenticationKey** | [**NetworksnetworkIdswitchroutingospfMd5AuthenticationKey**](NetworksnetworkIdswitchroutingospfMd5AuthenticationKey.md) |  | [optional] 


