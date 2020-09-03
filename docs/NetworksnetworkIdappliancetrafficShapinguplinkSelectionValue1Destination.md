# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **String** | E.g.: \"any\", \"0\" (also means \"any\"), \"8080\", \"1-1024\" | [optional] 
**cidr** | **String** | CIDR format address, or \"any\". E.g.: \"192.168.10.0/24\",  \"192.168.10.1\" (same as \"192.168.10.1/32\"), \"0.0.0.0/0\" (same as \"any\") | [optional] 
**network** | **String** | Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: \"L_12345678\". | [optional] 
**vlan** | **Number** | VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network. | [optional] 
**host** | **Number** | Host ID in the VLAN, should be used along with 'vlan', and not exceed the vlan subnet capacity. Currently only available under a template network. | [optional] 
**fqdn** | **String** | FQDN format address. Currently only availabe in 'destination' of 'vpnTrafficUplinkPreference' object. E.g.: 'www.google.com' | [optional] 


