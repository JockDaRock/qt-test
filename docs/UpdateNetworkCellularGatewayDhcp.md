# MerakiDashboardApi.UpdateNetworkCellularGatewayDhcp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcpLeaseTime** | **String** | DHCP Lease time for all MG of the network. It can be '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'. | [optional] 
**dnsNameservers** | **String** | DNS name servers mode for all MG of the network. It can take 4 different values: 'upstream_dns', 'google_dns', 'opendns', 'custom'. | [optional] 
**dnsCustomNameservers** | **[String]** | list of fixed IP representing the the DNS Name servers when the mode is 'custom' | [optional] 


