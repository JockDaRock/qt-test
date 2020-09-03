# MerakiDashboardApi.DevicesserialcellularGatewayportForwardingRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A descriptive name for the rule | [optional] 
**lanIp** | **String** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**publicPort** | **String** | A port or port ranges that will be forwarded to the host on the LAN | 
**localPort** | **String** | A port or port ranges that will receive the forwarded traffic from the WAN | 
**allowedIps** | **[String]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges. | [optional] 
**protocol** | **String** | TCP or UDP | 
**access** | **String** | &#x60;any&#x60; or &#x60;restricted&#x60;. Specify the right to make inbound connections on the specified ports or port ranges. If &#x60;restricted&#x60;, a list of allowed IPs is mandatory. | 
