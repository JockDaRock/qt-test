# MerakiDashboardApi.Body51

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcpLeaseTime** | **String** | DHCP Lease time for all MG of the network. It can be &#x27;30 minutes&#x27;, &#x27;1 hour&#x27;, &#x27;4 hours&#x27;, &#x27;12 hours&#x27;, &#x27;1 day&#x27; or &#x27;1 week&#x27;. | [optional] 
**dnsNameservers** | **String** | DNS name servers mode for all MG of the network. It can take 4 different values: &#x27;upstream_dns&#x27;, &#x27;google_dns&#x27;, &#x27;opendns&#x27;, &#x27;custom&#x27;. | [optional] 
**dnsCustomNameservers** | **[String]** | list of fixed IP representing the the DNS Name servers when the mode is &#x27;custom&#x27; | [optional] 
